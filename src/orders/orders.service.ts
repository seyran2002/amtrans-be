/// <reference types="multer" />
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { ConflictException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomInt } from 'node:crypto';
import * as QRCode from 'qrcode';
import { OrderStatus, Prisma, Role } from '../../generated/prisma';
import { CloudinaryService, CloudinaryUploadResult } from '../cloudinary/cloudinary.service';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { TelegramService } from '../telegram/telegram.service';
import {
  getOrderNotificationMessage,
  getEstimateSubmittedTelegramTemplate,
  getEstimateAcceptedTelegramTemplate,
  getEstimateCancelledTelegramTemplate,
  getCustomerStatusUpdateTelegramTemplate,
} from './telegram.template';
import { UserFromJwt } from '../auth/jwt.strategy';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { SubmitEstimateDto } from './dto/submit-estimate.dto';
import { RespondEstimateDto, EstimateAction } from './dto/respond-estimate.dto';

const CUSTOMER_EDITABLE_FIELDS = [
  'fromOfficeId',
  'toOfficeId',
  'receiverId',
  'pieceCount',
  'productPrice',
  'price',
  'currency',
  'marketName',
  'productDescription',
  'comment',
  'weight',
  'length',
  'width',
  'height',
  'isNew',
  'invoice',
  'invoiceUrl',
];

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/bmp',
  'application/pdf',
  'application/msword',
  'text/plain',
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const TRACKING_NUMBER_PREFIX = 'AMT-';
const TRACKING_NUMBER_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const TRACKING_NUMBER_LENGTH = 6;
const MAX_TRACKING_NUMBER_RETRIES = 5;

/** Reusable Prisma include for order queries with full relations. */
const ORDER_DETAIL_INCLUDE = {
  fromOffice: { include: { country: true } },
  toOffice: { include: { country: true } },
  receiver: true,
  estimatedBy: {
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
    },
  },
  user: {
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phoneNumber: true,
      code: true,
      companyName: true,
      taxpayerId: true,
      documentNumber: true,
      hyDocumentType: true,
      enDocumentType: true,
      ruDocumentType: true,
      isIndividual: true,
      role: true,
    },
  },
} as const;

@Injectable()
export class OrdersService implements OnModuleInit {
  private readonly logger = new Logger(OrdersService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private readonly telegramService: TelegramService,
  ) { }

  // ──────────────────────────────────────────────────────────
  // Helper methods
  // ──────────────────────────────────────────────────────────

  /**
   * Calculates volumetric weight, billable weight (with 5kg minimum), and total shipping price.
   * - volumetricWeight = (length * width * height) / volumetricDivisor
   * - chargeableWeight = max(physicalWeight, volumetricWeight)
   * - billableWeight = max(chargeableWeight, 5)
   * - totalPrice = round(billableWeight * tariffPerKg)
   */
  private async calculateShippingPrice(
    weight: number,
    length: number,
    width: number,
    height: number,
    tariffPerKg: number,
  ): Promise<{
    volumetricWeight: number;
    chargeableWeight: number;
    billableWeight: number;
    totalPrice: number;
  }> {
    const setting = await this.prisma.systemSetting.findFirst();
    const divisor =
      setting && setting.volumetricDivisor > 0
        ? setting.volumetricDivisor
        : 5000;

    const numL = Number(length) || 0;
    const numW = Number(width) || 0;
    const numH = Number(height) || 0;
    const numWeight = Number(weight) || 0;

    const vol = (numL * numW * numH) / divisor;
    const volumetricWeight = Math.round(vol * 100) / 100;
    const actualWeight = Math.round(numWeight * 1000) / 1000;

    const chargeableWeight =
      Math.round(Math.max(actualWeight, volumetricWeight) * 100) / 100;
    const billableWeight = Math.max(chargeableWeight, 5);

    const rawTotal = billableWeight * tariffPerKg;
    const totalPrice = Math.round(rawTotal);

    return {
      volumetricWeight,
      chargeableWeight,
      billableWeight,
      totalPrice,
    };
  }

  /**
   * Determines the initial order status based on tariff availability.
   * If a tariff exists for the route, price is required and status is UNDER_REVIEW.
   * If no tariff exists, status is PENDING_ESTIMATE and price is not required.
   */
  private async determineTariffStatus(
    fromOfficeId: string,
    toOfficeId: string,
    price: number | undefined | null,
  ): Promise<OrderStatus> {
    const tariff = await this.prisma.tariff.findFirst({
      where: { fromOfficeId, toOfficeId },
    });

    if (tariff) {
      if (price === undefined || price === null) {
        throw new BadRequestException(
          'price (shipping price) is required when a tariff exists for the selected route',
        );
      }
      return OrderStatus.UNDER_REVIEW;
    }

    return OrderStatus.PENDING_ESTIMATE;
  }

  /**
   * Validates that a customer has permission to update specific fields
   * based on the current order status.
   */
  private validateCustomerFieldPermissions(
    order: { status: OrderStatus; userId: string | null },
    passedKeys: string[],
  ): void {
    const isInitialStatus =
      order.status === OrderStatus.UNDER_REVIEW ||
      order.status === OrderStatus.PENDING_ESTIMATE ||
      order.status === OrderStatus.REGISTERED;

    if (isInitialStatus) {
      if (order.status === OrderStatus.PENDING_ESTIMATE) {
        const isChangingRoute = passedKeys.includes('fromOfficeId') || passedKeys.includes('toOfficeId');
        if (passedKeys.includes('price') && !isChangingRoute) {
          throw new BadRequestException(
            'Cannot modify price for an order pending estimate. Price must be estimated by an operator and approved by customer.',
          );
        }
      }

      const unauthorizedKeys = passedKeys.filter(
        (key) => !CUSTOMER_EDITABLE_FIELDS.includes(key),
      );
      if (unauthorizedKeys.length > 0) {
        throw new BadRequestException(
          `Customers cannot modify fields: ${unauthorizedKeys.join(', ')}`,
        );
      }
    } else {
      const unauthorizedKeys = passedKeys.filter(
        (key) => key !== 'receiverId',
      );
      if (unauthorizedKeys.length > 0) {
        throw new BadRequestException(
          `Cannot update fields [${unauthorizedKeys.join(', ')}] when order status is "${order.status}". Only receiverId can be updated.`,
        );
      }
    }
  }

  /**
   * Validates operator status transitions and returns the status to set (if any).
   */
  private validateOperatorStatusTransition(
    currentStatus: OrderStatus,
    newStatus: OrderStatus,
  ): void {
    if (
      currentStatus === OrderStatus.PENDING_ESTIMATE &&
      newStatus === OrderStatus.REGISTERED
    ) {
      throw new BadRequestException(
        'Cannot register an order in PENDING_ESTIMATE status directly. Customer approval of the estimate is required.',
      );
    }

    if (
      (currentStatus === OrderStatus.CANCELLED ||
        currentStatus === OrderStatus.REJECTED) &&
      newStatus !== currentStatus
    ) {
      throw new BadRequestException(
        `Cannot change status of an order that has already been ${currentStatus.toLowerCase()}`,
      );
    }
  }

  /**
   * Builds the Prisma update data object from the DTO, only including explicitly provided fields.
   */
  private buildUpdateData(
    dto: UpdateOrderDto,
    invoiceUrl: string | undefined,
  ): Record<string, any> {
    const data: Record<string, any> = {};

    if (dto.fromOfficeId !== undefined) data.fromOfficeId = dto.fromOfficeId.trim();
    if (dto.toOfficeId !== undefined) data.toOfficeId = dto.toOfficeId.trim();
    if (dto.receiverId !== undefined) {
      data.receiverId =
        dto.receiverId && dto.receiverId.trim() !== ''
          ? dto.receiverId.trim()
          : null;
    }
    if (dto.pieceCount !== undefined) data.pieceCount = dto.pieceCount;
    if (dto.productPrice !== undefined) data.productPrice = dto.productPrice;
    if (dto.price !== undefined) data.price = dto.price;
    if (dto.currency !== undefined) data.currency = dto.currency;
    if (dto.marketName !== undefined) data.marketName = dto.marketName.trim();
    if (dto.productDescription !== undefined) {
      data.productDescription = dto.productDescription.trim();
    }
    if (dto.comment !== undefined) {
      data.comment = dto.comment?.trim() || null;
    }
    if (dto.weight !== undefined) data.weight = dto.weight;
    if (dto.length !== undefined) data.length = dto.length;
    if (dto.width !== undefined) data.width = dto.width;
    if (dto.height !== undefined) data.height = dto.height;
    if (dto.isNew !== undefined) data.isNew = dto.isNew;
    if (invoiceUrl !== undefined) data.invoiceUrl = invoiceUrl;

    return data;
  }

  /**
   * Collects the list of field keys explicitly provided in the DTO/request.
   */
  private collectPassedKeys(
    dto: UpdateOrderDto,
    invoiceFile?: Express.Multer.File,
  ): string[] {
    const passedKeys = Object.keys(dto).filter((key) => {
      if ((dto as any)[key] === undefined) return false;
      if (key === 'invoice' && !invoiceFile && !dto.invoice) return false;
      return true;
    });
    if (invoiceFile && !passedKeys.includes('invoice')) {
      passedKeys.push('invoice');
    }
    return passedKeys;
  }

  /**
   * Verifies that a receiver exists and that a customer owns it.
   */
  private async verifyReceiverOwnership(
    receiverId: string,
    isCustomer: boolean,
    userId: string,
  ): Promise<void> {
    const receiver = await this.prisma.receiver.findUnique({
      where: { id: receiverId.trim() },
    });
    if (!receiver) {
      throw new NotFoundException(
        `Receiver with id "${receiverId}" not found`,
      );
    }
    if (isCustomer && receiver.userId !== userId) {
      throw new ForbiddenException(
        'You do not have permission to assign this receiver to the order',
      );
    }
  }

  /**
   * Verifies that an office exists by id.
   */
  private async verifyOfficeExists(
    officeId: string,
    label: string,
  ): Promise<void> {
    const office = await this.prisma.office.findUnique({
      where: { id: officeId.trim() },
    });
    if (!office) {
      throw new NotFoundException(
        `${label} office with id "${officeId}" not found`,
      );
    }
  }

  // ──────────────────────────────────────────────────────────
  // Lifecycle
  // ──────────────────────────────────────────────────────────

  async onModuleInit() {
    await this.backfillTrackingNumbers();
  }

  /**
   * Generates a unique tracking number in format AMT-XXXXXX,
   * where XXXXXX consists of 6 cryptographically secure uppercase alphanumeric characters.
   */
  generateTrackingNumber(): string {
    let result = '';
    for (let i = 0; i < TRACKING_NUMBER_LENGTH; i++) {
      result += TRACKING_NUMBER_CHARS[randomInt(0, TRACKING_NUMBER_CHARS.length)];
    }
    return `${TRACKING_NUMBER_PREFIX}${result}`;
  }

  /**
   * Safely backfills unique tracking numbers for any existing orders missing one.
   */
  async backfillTrackingNumbers(): Promise<number> {
    try {
      const existingOrdersWithoutTracking = await this.prisma.$queryRaw<{ id: string }[]>(
        Prisma.sql`SELECT id FROM "Order" WHERE "trackingNumber" IS NULL OR "trackingNumber" = ''`,
      );

      if (!existingOrdersWithoutTracking || existingOrdersWithoutTracking.length === 0) {
        return 0;
      }

      this.logger.log(
        `Found ${existingOrdersWithoutTracking.length} orders requiring tracking number backfill. Starting safe backfill...`,
      );

      let updatedCount = 0;
      for (const order of existingOrdersWithoutTracking) {
        let updated = false;
        let attempts = 0;

        while (!updated && attempts < MAX_TRACKING_NUMBER_RETRIES) {
          attempts++;
          const trackingNumber = this.generateTrackingNumber();

          try {
            await this.prisma.$executeRaw(
              Prisma.sql`UPDATE "Order" SET "trackingNumber" = ${trackingNumber} WHERE id = ${order.id}`,
            );
            updated = true;
            updatedCount++;
          } catch (error: any) {
            const isUniqueViolation =
              error?.code === '23505' ||
              (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002');

            if (isUniqueViolation && attempts < MAX_TRACKING_NUMBER_RETRIES) {
              this.logger.warn(
                `Tracking number collision during backfill for order ${order.id}. Retrying (${attempts}/${MAX_TRACKING_NUMBER_RETRIES})...`,
              );
              continue;
            }
            throw error;
          }
        }
      }

      this.logger.log(`Successfully backfilled ${updatedCount} orders with unique tracking numbers.`);
      return updatedCount;
    } catch (error: any) {
      this.logger.error(
        `Error during tracking number backfill: ${error?.message || error}`,
        error?.stack,
      );
      return 0;
    }
  }

  private async createOrderWithUniqueTrackingNumber(
    fromOfficeId: string,
    toOfficeId: string,
    userId: string,
    dto: CreateOrderDto,
    invoiceUrl: string | null,
    status: OrderStatus = OrderStatus.UNDER_REVIEW,
    tariffRateAtBooking: Prisma.Decimal | null = null,
    price: number = 0,
  ) {
    let attempts = 0;

    while (attempts < MAX_TRACKING_NUMBER_RETRIES) {
      attempts++;
      const trackingNumber = this.generateTrackingNumber();

      try {
        const order = await this.prisma.order.create({
          data: {
            trackingNumber,
            fromOfficeId,
            toOfficeId,
            receiverId: dto.receiverId || null,
            userId,
            productPrice: dto.productPrice,
            currency: dto.currency,
            price,
            tariffRateAtBooking,
            marketName: dto.marketName,
            productDescription: dto.productDescription,
            pieceCount: dto.pieceCount,
            comment: dto.comment,
            weight: dto.weight,
            length: dto.length,
            width: dto.width,
            height: dto.height,
            isNew: dto.isNew !== undefined ? dto.isNew : true,
            invoiceUrl,
            status,
          },
          include: {
            fromOffice: true,
            toOffice: true,
            receiver: true,
          },
        });
        return order;
      } catch (error: any) {
        const isTrackingConflict =
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2002' &&
          (!error.meta?.target ||
            (Array.isArray(error.meta.target) &&
              error.meta.target.some((t: string) => t.includes('trackingNumber'))) ||
            (typeof error.meta.target === 'string' &&
              error.meta.target.includes('trackingNumber')));

        if (isTrackingConflict && attempts < MAX_TRACKING_NUMBER_RETRIES) {
          this.logger.warn(
            `Tracking number collision detected for "${trackingNumber}" (attempt ${attempts}/${MAX_TRACKING_NUMBER_RETRIES}). Retrying with a new code...`,
          );
          continue;
        }

        throw error;
      }
    }

    throw new InternalServerErrorException(
      'Failed to generate a unique tracking number for the order. Please try again.',
    );
  }

  async create(
    user: UserFromJwt,
    dto: CreateOrderDto,
    invoiceFile?: Express.Multer.File,
  ) {
    const fromOfficeId = dto.fromOfficeId?.trim();
    const toOfficeId = dto.toOfficeId?.trim();

    // 1. Verify fromOffice and toOffice exist
    const [fromOffice, toOffice] = await Promise.all([
      this.prisma.office.findUnique({ where: { id: fromOfficeId } }),
      this.prisma.office.findUnique({ where: { id: toOfficeId } }),
    ]);

    if (!fromOffice) {
      throw new NotFoundException(
        `From office with id "${dto.fromOfficeId}" not found`,
      );
    }

    if (!toOffice) {
      throw new NotFoundException(
        `To office with id "${dto.toOfficeId}" not found`,
      );
    }

    // 2. Verify receiver exists and enforce authorization
    if (dto.receiverId) {
      const receiver = await this.prisma.receiver.findUnique({
        where: { id: dto.receiverId },
      });
      if (!receiver) {
        throw new NotFoundException(
          `Receiver with id "${dto.receiverId}" not found`,
        );
      }

      if (user.role === Role.CUSTOMER && receiver.userId !== user.id) {
        throw new ForbiddenException(
          'You do not have permission to create an order for this receiver',
        );
      }
    }

    // 3. Fetch active tariff for route, calculate shipping price, and snapshot tariff rate
    const activeTariff = await this.prisma.tariff.findFirst({
      where: { fromOfficeId, toOfficeId },
    });

    let initialStatus: OrderStatus;
    let tariffRateAtBooking: Prisma.Decimal | null = null;
    let finalPrice = 0;

    if (activeTariff) {
      initialStatus = OrderStatus.UNDER_REVIEW;
      tariffRateAtBooking = activeTariff.pricePerKg;

      const { totalPrice } = await this.calculateShippingPrice(
        Number(dto.weight),
        Number(dto.length),
        Number(dto.width),
        Number(dto.height),
        Number(activeTariff.pricePerKg),
      );
      finalPrice = totalPrice;
    } else {
      initialStatus = OrderStatus.PENDING_ESTIMATE;
      tariffRateAtBooking = null;
      finalPrice = 0;
    }

    // 4. Upload invoice file if provided
    let invoiceUrl: string | null = null;
    if (invoiceFile) {
      this.validateInvoiceFile(invoiceFile);
      try {
        const uploadResult = await this.uploadWithRetry(
          invoiceFile,
          'orders',
          3,
        );
        invoiceUrl = uploadResult.secureUrl;
      } catch (error: any) {
        this.logger.error(
          `Failed to upload invoice file for order: ${error?.message || error}`,
        );
        throw new InternalServerErrorException(
          'Failed to upload invoice file to Cloudinary. Please try again.',
        );
      }
    }

    // 5. Create Order in database with unique trackingNumber and locked tariff snapshot
    const order = await this.createOrderWithUniqueTrackingNumber(
      fromOfficeId,
      toOfficeId,
      user.id,
      dto,
      invoiceUrl,
      initialStatus,
      tariffRateAtBooking,
      finalPrice,
    );

    // 6. Generate QR code in backend and upload to Cloudinary
    let finalOrder = order;
    const qrCodeUrl = await this.generateAndUploadQrCode(order.id);
    if (qrCodeUrl) {
      finalOrder = await this.prisma.order.update({
        where: { id: order.id },
        data: { qrCode: qrCodeUrl },
        include: {
          fromOffice: true,
          toOffice: true,
          receiver: true,
          user: true,
        },
      });
    }

    // 7. Notify operators via Telegram and Email (dual-channel, non-blocking)
    await this.notifyOperatorsViaTelegram(finalOrder);

    // 8. Notify customer of order submission via Telegram and Email (dual-channel, non-blocking)
    await this.notifyCustomerOfStatusUpdate(finalOrder, finalOrder.status);

    return finalOrder;
  }

  async update(
    id: string,
    user: UserFromJwt,
    dto: UpdateOrderDto,
    invoiceFile?: Express.Multer.File,
  ) {
    if (!id || !id.trim()) {
      throw new BadRequestException('Order id is required');
    }

    const order = await this.prisma.order.findUnique({
      where: { id: id.trim() },
    });

    if (!order) {
      throw new NotFoundException(`Order with id "${id}" not found`);
    }

    const isOperator = user.role === Role.OPERATOR || user.role === Role.ADMIN;
    const isCustomer = user.role === Role.CUSTOMER;

    if (!isOperator && !isCustomer) {
      throw new ForbiddenException(
        'You do not have permission to update this order',
      );
    }

    // 1. Customer-specific permission checks
    if (isCustomer) {
      if (order.userId !== user.id) {
        throw new ForbiddenException(
          'You do not have permission to update this order',
        );
      }

      const passedKeys = this.collectPassedKeys(dto, invoiceFile);
      this.validateCustomerFieldPermissions(order, passedKeys);
    }

    // 2. Verify receiver ownership if provided
    if (
      dto.receiverId !== undefined &&
      dto.receiverId !== null &&
      dto.receiverId.trim() !== ''
    ) {
      await this.verifyReceiverOwnership(dto.receiverId, isCustomer, user.id);
    }

    // 3. Verify offices exist if provided
    if (dto.fromOfficeId !== undefined && dto.fromOfficeId.trim() !== '') {
      await this.verifyOfficeExists(dto.fromOfficeId, 'From');
    }
    if (dto.toOfficeId !== undefined && dto.toOfficeId.trim() !== '') {
      await this.verifyOfficeExists(dto.toOfficeId, 'To');
    }

    // 4. Handle route change: re-evaluate tariff, reset prices and estimate
    const effectiveFromOfficeId = dto.fromOfficeId?.trim() ?? order.fromOfficeId;
    const effectiveToOfficeId = dto.toOfficeId?.trim() ?? order.toOfficeId;
    const routeChanged =
      effectiveFromOfficeId !== order.fromOfficeId ||
      effectiveToOfficeId !== order.toOfficeId;

    let routeChangeResets: Record<string, any> | null = null;

    if (routeChanged) {
      if (effectiveFromOfficeId && effectiveToOfficeId && effectiveFromOfficeId === effectiveToOfficeId) {
        throw new BadRequestException(
          'Origin and destination offices cannot be the same',
        );
      }

      // When route changes, always reset all estimatedPrice and related fields to null
      routeChangeResets = {
        estimatedPrice: null,
        estimatedById: null,
        estimatedAt: null,
      };

      // Only re-evaluate status for orders still in an initial editable state
      const isInitial =
        order.status === OrderStatus.UNDER_REVIEW ||
        order.status === OrderStatus.PENDING_ESTIMATE ||
        order.status === OrderStatus.REGISTERED;

      if (isInitial) {
        const tariff = await this.prisma.tariff.findFirst({
          where: { fromOfficeId: effectiveFromOfficeId, toOfficeId: effectiveToOfficeId },
        });

        if (tariff) {
          // New route has a tariff: calculate price with new route tariff and lock tariffRateAtBooking
          const effectiveW = dto.weight !== undefined ? Number(dto.weight) : Number(order.weight);
          const effectiveL = dto.length !== undefined ? Number(dto.length) : Number(order.length);
          const effectiveWi = dto.width !== undefined ? Number(dto.width) : Number(order.width);
          const effectiveH = dto.height !== undefined ? Number(dto.height) : Number(order.height);

          const { totalPrice } = await this.calculateShippingPrice(
            effectiveW,
            effectiveL,
            effectiveWi,
            effectiveH,
            Number(tariff.pricePerKg),
          );

          routeChangeResets.status = OrderStatus.UNDER_REVIEW;
          routeChangeResets.tariffRateAtBooking = tariff.pricePerKg;
          routeChangeResets.price = totalPrice;
        } else {
          // New route has no tariff: inquiry flow, clear all pricing and tariff snapshot
          routeChangeResets.status = OrderStatus.PENDING_ESTIMATE;
          routeChangeResets.tariffRateAtBooking = null;
          routeChangeResets.price = 0;
        }
      }
    }

    // 5. Upload invoice file if provided
    let invoiceUrl: string | undefined = undefined;
    if (invoiceFile) {
      this.validateInvoiceFile(invoiceFile);
      try {
        const uploadResult = await this.uploadWithRetry(
          invoiceFile,
          'orders',
          3,
        );
        invoiceUrl = uploadResult.secureUrl;
      } catch (error: any) {
        this.logger.error(
          `Failed to upload invoice file for order: ${error?.message || error}`,
        );
        throw new InternalServerErrorException(
          'Failed to upload invoice file to Cloudinary. Please try again.',
        );
      }
    } else if (dto.invoiceUrl !== undefined) {
      invoiceUrl = dto.invoiceUrl;
    }

    // 6. Build update data from provided fields
    const data = this.buildUpdateData(dto, invoiceUrl);

    // Apply route change resets (resets estimatedPrice, estimatedById, estimatedAt, and sets price & status)
    if (routeChangeResets) {
      Object.assign(data, routeChangeResets);
    } else {
      // 6b. Route did not change: if weight, length, width, or height are modified,
      // recalculate the price using the existing order's locked tariffRateAtBooking
      // (or fallback to estimatedPrice if tariffRateAtBooking is empty)
      const dimensionsModified =
        dto.weight !== undefined ||
        dto.length !== undefined ||
        dto.width !== undefined ||
        dto.height !== undefined;

      if (dimensionsModified) {
        let lockedRate: number | null = null;

        if (order.tariffRateAtBooking !== null && order.tariffRateAtBooking !== undefined) {
          lockedRate = Number(order.tariffRateAtBooking);
        } else if (order.estimatedPrice !== null && order.estimatedPrice !== undefined) {
          lockedRate = Number(order.estimatedPrice);
        }

        if (lockedRate !== null && !isNaN(lockedRate) && lockedRate > 0) {
          const effectiveWeight = dto.weight !== undefined ? Number(dto.weight) : Number(order.weight);
          const effectiveLength = dto.length !== undefined ? Number(dto.length) : Number(order.length);
          const effectiveWidth = dto.width !== undefined ? Number(dto.width) : Number(order.width);
          const effectiveHeight = dto.height !== undefined ? Number(dto.height) : Number(order.height);

          const { totalPrice } = await this.calculateShippingPrice(
            effectiveWeight,
            effectiveLength,
            effectiveWidth,
            effectiveHeight,
            lockedRate,
          );

          data.price = totalPrice;
        } else if (order.status !== OrderStatus.PENDING_ESTIMATE) {
          // Fallback for legacy orders created before tariffRateAtBooking was introduced
          const activeTariff = await this.prisma.tariff.findFirst({
            where: { fromOfficeId: order.fromOfficeId, toOfficeId: order.toOfficeId },
          });

          if (activeTariff) {
            const effectiveWeight = dto.weight !== undefined ? Number(dto.weight) : Number(order.weight);
            const effectiveLength = dto.length !== undefined ? Number(dto.length) : Number(order.length);
            const effectiveWidth = dto.width !== undefined ? Number(dto.width) : Number(order.width);
            const effectiveHeight = dto.height !== undefined ? Number(dto.height) : Number(order.height);

            const { totalPrice } = await this.calculateShippingPrice(
              effectiveWeight,
              effectiveLength,
              effectiveWidth,
              effectiveHeight,
              Number(activeTariff.pricePerKg),
            );

            data.price = totalPrice;
            data.tariffRateAtBooking = activeTariff.pricePerKg;
          }
        }
      }
    }

    // 7. Operator-specific fields
    if (isOperator) {
      if (dto.status !== undefined) {
        this.validateOperatorStatusTransition(order.status, dto.status);
        data.status = dto.status;
      }
      if (dto.tnVedCode !== undefined) {
        data.tnVedCode = dto.tnVedCode?.trim() || null;
      }
    }

    const updatedOrder = await this.prisma.order.update({
      where: { id: id.trim() },
      data,
      include: ORDER_DETAIL_INCLUDE,
    });

    if (data.status && data.status !== order.status) {
      await this.notifyCustomerOfStatusUpdate(updatedOrder, data.status);
    }

    return updatedOrder;
  }

  async updateStatus(id: string, status: OrderStatus) {
    if (!id || !id.trim()) {
      throw new BadRequestException('Order id is required');
    }

    if (!status) {
      throw new BadRequestException('Status is required');
    }

    const order = await this.prisma.order.findUnique({
      where: { id: id.trim() },
    });

    if (!order) {
      throw new NotFoundException(`Order with id "${id}" not found`);
    }

    this.validateOperatorStatusTransition(order.status, status);

    const oldStatus = order.status;

    const updatedOrder = await this.prisma.order.update({
      where: { id: id.trim() },
      data: { status },
      include: ORDER_DETAIL_INCLUDE,
    });

    if (oldStatus !== status) {
      await this.notifyCustomerOfStatusUpdate(updatedOrder, status);
    }

    return updatedOrder;
  }

  async submitEstimate(
    id: string,
    user: UserFromJwt,
    dto: SubmitEstimateDto,
  ) {
    if (!id || !id.trim()) {
      throw new BadRequestException('Order id is required');
    }

    const order = await this.prisma.order.findUnique({
      where: { id: id.trim() },
    });

    if (!order) {
      throw new NotFoundException(`Order with id "${id}" not found`);
    }

    // Role verification: Only operators and admins can submit estimates
    if (user.role !== Role.ADMIN && user.role !== Role.OPERATOR) {
      throw new ForbiddenException(
        'Only operators and administrators can submit price estimates',
      );
    }

    // Office authorization: Operator must belong to the order's origin office
    if (user.role === Role.OPERATOR) {
      if (!user.officeId || user.officeId !== order.fromOfficeId) {
        throw new ForbiddenException(
          'Operators can only submit price estimates for orders originating from their assigned office',
        );
      }
    }

    // Status validation: Order must be in PENDING_ESTIMATE status
    if (order.status !== OrderStatus.PENDING_ESTIMATE) {
      throw new BadRequestException(
        `Cannot submit price estimate for an order with status "${order.status}". Order must be in PENDING_ESTIMATE status.`,
      );
    }

    // Prevent duplicate estimates / overwrites
    if (order.estimatedPrice !== null && order.estimatedPrice !== undefined) {
      throw new ConflictException(
        'A price estimate has already been submitted for this order',
      );
    }

    // Validate positive price in AMD
    const proposedPrice = Number(dto.estimatedPrice);
    if (!Number.isFinite(proposedPrice) || proposedPrice <= 0) {
      throw new BadRequestException(
        'Estimated shipping price must be a positive number in AMD',
      );
    }

    const updatedOrder = await this.prisma.order.update({
      where: { id: order.id },
      data: {
        estimatedPrice: new Prisma.Decimal(proposedPrice.toFixed(2)),
        estimatedById: user.id,
        estimatedAt: new Date(),
        price: dto.price,
        // Keep status as PENDING_ESTIMATE
      },
      include: ORDER_DETAIL_INCLUDE,
    });

    // Notify customer via Telegram (non-blocking)
    await this.notifyCustomerOfEstimateSubmitted(updatedOrder, proposedPrice);

    return updatedOrder;
  }

  async acceptEstimate(id: string, user: UserFromJwt) {
    if (!id || !id.trim()) {
      throw new BadRequestException('Order id is required');
    }

    const updatedOrder = await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id: id.trim() },
      });

      if (!order) {
        throw new NotFoundException(`Order with id "${id}" not found`);
      }

      // Security: Only the authenticated order owner can accept the estimate
      if (order.userId !== user.id) {
        throw new ForbiddenException(
          'Only the order owner can accept the price estimate',
        );
      }

      // Concurrency/State check: Must be in PENDING_ESTIMATE status
      if (order.status !== OrderStatus.PENDING_ESTIMATE) {
        throw new BadRequestException(
          `Cannot accept estimate for order with status "${order.status}". Order must be in PENDING_ESTIMATE status.`,
        );
      }

      // Must have an estimate submitted by operator
      if (order.estimatedPrice === null || order.estimatedPrice === undefined) {
        throw new BadRequestException(
          'Cannot accept estimate: No price estimate has been submitted by an operator yet',
        );
      }

      const estimatedPriceNum = Number(order.estimatedPrice);
      if (!Number.isFinite(estimatedPriceNum) || estimatedPriceNum <= 0) {
        throw new BadRequestException('The estimated shipping price is invalid');
      }

      // Concurrency-safe atomic transition: update where id and status match
      const updateResult = await tx.order.updateMany({
        where: {
          id: order.id,
          status: OrderStatus.PENDING_ESTIMATE,
        },
        data: {
          price: order.price ?? order.estimatedPrice,
          tariffRateAtBooking: order.tariffRateAtBooking ?? order.estimatedPrice,
          status: OrderStatus.REGISTERED,
        },
      });

      if (updateResult.count === 0) {
        throw new ConflictException(
          'Order status was updated concurrently. Please refresh and try again.',
        );
      }

      return tx.order.findUniqueOrThrow({
        where: { id: order.id },
        include: ORDER_DETAIL_INCLUDE,
      });
    });

    // Notify origin office operators via Telegram (non-blocking)
    await this.notifyOperatorsOfEstimateDecision(updatedOrder, 'accept');

    return updatedOrder;
  }

  async cancelEstimate(id: string, user: UserFromJwt) {
    if (!id || !id.trim()) {
      throw new BadRequestException('Order id is required');
    }

    const updatedOrder = await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id: id.trim() },
      });

      if (!order) {
        throw new NotFoundException(`Order with id "${id}" not found`);
      }

      // Security: Only the authenticated order owner can cancel the tariff inquiry
      if (order.userId !== user.id) {
        throw new ForbiddenException(
          'Only the order owner can cancel the tariff inquiry',
        );
      }

      // Concurrency/State check: Must be in PENDING_ESTIMATE status
      if (order.status !== OrderStatus.PENDING_ESTIMATE) {
        throw new BadRequestException(
          `Cannot cancel tariff inquiry for order with status "${order.status}". Order must be in PENDING_ESTIMATE status.`,
        );
      }

      // Concurrency-safe atomic transition: update where id and status match
      const updateResult = await tx.order.updateMany({
        where: {
          id: order.id,
          status: OrderStatus.PENDING_ESTIMATE,
        },
        data: {
          status: OrderStatus.CANCELLED,
        },
      });

      if (updateResult.count === 0) {
        throw new ConflictException(
          'Order status was updated concurrently. Please refresh and try again.',
        );
      }

      return tx.order.findUniqueOrThrow({
        where: { id: order.id },
        include: ORDER_DETAIL_INCLUDE,
      });
    });

    // Notify origin office operators via Telegram (non-blocking)
    await this.notifyOperatorsOfEstimateDecision(updatedOrder, 'cancel');

    return updatedOrder;
  }

  async respondToEstimate(
    id: string,
    user: UserFromJwt,
    dto: RespondEstimateDto,
  ) {
    if (dto.action === EstimateAction.ACCEPT) {
      return this.acceptEstimate(id, user);
    } else if (dto.action === EstimateAction.CANCEL) {
      return this.cancelEstimate(id, user);
    } else {
      throw new BadRequestException(
        `Invalid action "${dto.action}". Must be "accept" or "cancel"`,
      );
    }
  }

  async findByOfficeId(officeId: string) {
    if (!officeId || !officeId.trim()) {
      throw new BadRequestException('officeId is required');
    }

    return this.prisma.order.findMany({
      where: {
        OR: [
          { fromOfficeId: officeId.trim() },
          { toOfficeId: officeId.trim() },
        ],
      },
      orderBy: { createdAt: 'desc' },
      include: ORDER_DETAIL_INCLUDE,
    });
  }

  async findOne(id: string, user: UserFromJwt) {
    if (!id || !id.trim()) {
      throw new BadRequestException('Order id is required');
    }

    const order = await this.prisma.order.findUnique({
      where: { id: id.trim() },
      include: {
        fromOffice: {
          include: {
            country: true,
          },
        },
        toOffice: {
          include: {
            country: true,
          },
        },
        receiver: true,
        estimatedBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            code: true,
            companyName: true,
            taxpayerId: true,
            documentNumber: true,
            hyDocumentType: true,
            enDocumentType: true,
            ruDocumentType: true,
            isIndividual: true,
            role: true,
            receivers: {
              orderBy: { createdAt: 'desc' },
            },
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with id "${id}" not found`);
    }

    if (user.role === Role.CUSTOMER && order.userId !== user.id) {
      throw new ForbiddenException('You do not have permission to view this order');
    }

    return order;
  }

  async findAll() {
    return this.prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        fromOffice: {
          include: {
            country: true,
          },
        },
        toOffice: {
          include: {
            country: true,
          },
        },
        receiver: true,
        estimatedBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            code: true,
            companyName: true,
            isIndividual: true,
            role: true,
          },
        },
      },
    });
  }

  async findMyOrders(userId: string) {
    return this.prisma.order.findMany({
      where: { userId: userId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        trackingNumber: true,
        status: true,
        productPrice: true,
        currency: true,
        marketName: true,
        productDescription: true,
        tariffRateAtBooking: true,
        price: true,
        isNew: true,
        weight: true,
        length: true,
        width: true,
        height: true,
        invoiceUrl: true,
        qrCode: true,
        comment: true,
        estimatedPrice: true,
        estimatedById: true,
        estimatedAt: true,
        createdAt: true,
        fromOffice: {
          select: {
            id: true,
            city: true,
            province: true,
            fullAddress: true,
            country: { select: { id: true, enName: true, hyName: true, ruName: true } },
          },
        },
        toOffice: {
          select: {
            id: true,
            city: true,
            province: true,
            fullAddress: true,
            country: { select: { id: true, enName: true, hyName: true, ruName: true } },
          },
        },
        receiver: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            address: true,
          },
        },
      },
    });
  }

  private async notifyOfficeUsersOfNewOrder(order: {
    id: string;
    trackingNumber?: string;
    status: OrderStatus;
    fromOfficeId: string;
    qrCode?: string | null;
  }): Promise<void> {
    if (
      (order.status !== OrderStatus.UNDER_REVIEW && order.status !== OrderStatus.PENDING_ESTIMATE) ||
      !order.fromOfficeId
    ) {
      return;
    }

    try {
      const officeId = order.fromOfficeId.trim();
      const officeUsers = await this.prisma.user.findMany({
        where: { officeId },
        select: { id: true, email: true },
      });

      if (!officeUsers || officeUsers.length === 0) {
        this.logger.log(
          `No users found with officeId "${officeId}" for order ${order.id}. Email notification skipped.`,
        );
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validEmails = Array.from(
        new Set(
          officeUsers
            .map((u) => u.email?.trim())
            .filter((email): email is string => Boolean(email && emailRegex.test(email))),
        ),
      );

      if (validEmails.length === 0) {
        this.logger.warn(
          `Users found for officeId "${officeId}" have no valid email address for order ${order.id}.`,
        );
        return;
      }

      await Promise.allSettled(
        validEmails.map(async (email) => {
          try {
            await this.emailService.sendOrderReviewNotification(
              email,
              order.id,
              order.qrCode,
            );
          } catch (err: any) {
            this.logger.warn(
              `Order review notification to ${email} for order ${order.id} failed: ${err?.message || err}`,
            );
          }
        }),
      );
    } catch (error: any) {
      this.logger.error(
        `Failed to process office notifications for order ${order.id}: ${error?.message || error}`,
      );
    }
  }

  private async notifyOperatorsViaTelegram(order: {
    id: string;
    trackingNumber?: string | null;
    status: OrderStatus;
    fromOfficeId: string;
    fromOffice?: { city?: string | null; province?: string | null } | null;
  }): Promise<void> {
    try {
      if (
        order.status !== OrderStatus.PENDING_ESTIMATE &&
        order.status !== OrderStatus.UNDER_REVIEW
      ) {
        return;
      }

      if (!order.fromOfficeId) {
        return;
      }

      const officeId = order.fromOfficeId.trim();

      // Find operators assigned to the order's origin office
      const operators = await this.prisma.user.findMany({
        where: {
          role: Role.OPERATOR,
          officeId,
          OR: [
            { telegramChatId: { not: null } },
            { email: { not: '' } },
          ],
        },
        select: {
          id: true,
          email: true,
          telegramChatId: true,
        },
      });

      // Format origin office name
      let fromOfficeName = '';
      if (order.fromOffice) {
        if (order.fromOffice.city && order.fromOffice.province && order.fromOffice.city !== order.fromOffice.province) {
          fromOfficeName = `${order.fromOffice.city}, ${order.fromOffice.province}`;
        } else {
          fromOfficeName = order.fromOffice.city || order.fromOffice.province || '';
        }
      }

      if (!fromOfficeName) {
        const office = await this.prisma.office.findUnique({
          where: { id: officeId },
          select: { city: true, province: true },
        });
        if (office) {
          if (office.city && office.province && office.city !== office.province) {
            fromOfficeName = `${office.city}, ${office.province}`;
          } else {
            fromOfficeName = office.city || office.province || '';
          }
        }
      }

      if (!fromOfficeName) {
        fromOfficeName = officeId;
      }

      const rawFrontendUrl = this.configService.get<string>('FRONTEND_URL') || 'https://www.amtrans.am/';
      const cleanFrontendUrl = rawFrontendUrl.trim().replace(/\/+$/, '');
      const orderUrl = `${cleanFrontendUrl}/dashboard/manage-orders/${order.id}`;

      const notificationParams = {
        trackingNumber: order.trackingNumber || order.id,
        fromOffice: fromOfficeName,
        orderUrl,
      };

      const telegramMessage = getOrderNotificationMessage(order.status, notificationParams);

      // Telegram recipients: deduplicate by telegramChatId
      const validTelegramRecipients = operators.filter(
        (op) => op.telegramChatId && op.telegramChatId.trim() !== '',
      );
      const seenChatIds = new Set<string>();
      const uniqueTelegramRecipients = validTelegramRecipients.filter((op) => {
        const chatId = op.telegramChatId!.trim();
        if (seenChatIds.has(chatId)) return false;
        seenChatIds.add(chatId);
        return true;
      });

      // Email recipients: deduplicate by valid email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validEmailRecipients = operators.filter(
        (op) => op.email && emailRegex.test(op.email.trim()),
      );
      const seenEmails = new Set<string>();
      const uniqueEmailRecipients = validEmailRecipients.filter((op) => {
        const email = op.email.trim().toLowerCase();
        if (seenEmails.has(email)) return false;
        seenEmails.add(email);
        return true;
      });

      // Send via Telegram independently
      const telegramPromises = (telegramMessage && uniqueTelegramRecipients.length > 0)
        ? uniqueTelegramRecipients.map(async (op) => {
          try {
            await this.telegramService.sendMessage(op.telegramChatId!.trim(), telegramMessage, { parse_mode: 'HTML' });
          } catch (err: any) {
            this.logger.warn(
              `Failed to send Telegram message to operator ${op.id} (chatId ${op.telegramChatId}) for order ${order.id}: ${err?.message || err}`,
            );
          }
        })
        : [];

      // Send via Email independently
      const emailPromises = uniqueEmailRecipients.length > 0
        ? uniqueEmailRecipients.map(async (op) => {
          try {
            await this.emailService.sendOperatorOrderNotification(
              op.email.trim(),
              order.status,
              notificationParams,
            );
          } catch (err: any) {
            this.logger.warn(
              `Failed to send order notification email to operator ${op.id} (${op.email}) for order ${order.id}: ${err?.message || err}`,
            );
          }
        })
        : [];

      await Promise.allSettled([...telegramPromises, ...emailPromises]);
    } catch (error: any) {
      this.logger.error(
        `Failed to process dual-channel operator notifications for order ${order.id}: ${error?.message || error}`,
      );
    }
  }

  private async notifyCustomerOfEstimateSubmitted(
    order: {
      id: string;
      userId?: string | null;
      user?: { email?: string | null } | null;
      trackingNumber?: string | null;
      estimatedPrice?: Prisma.Decimal | number | null;
    },
    proposedPrice: number,
  ): Promise<void> {
    try {
      if (!order.userId && !order.user?.email) {
        this.logger.debug(
          `No userId or user relation on order ${order.id}. Skipping customer estimate notification.`,
        );
        return;
      }

      let customerEmail = order.user?.email;
      let customerTelegramChatId: string | null | undefined;
      let customerId = order.userId || '';

      if (!customerEmail || customerTelegramChatId === undefined) {
        const customer = await this.prisma.user.findUnique({
          where: { id: order.userId! },
          select: { id: true, email: true, telegramChatId: true },
        });

        if (!customer) {
          this.logger.warn(
            `Customer user ${order.userId} not found for order ${order.id}. Estimate notification skipped.`,
          );
          return;
        }

        customerId = customer.id;
        customerEmail = customer.email;
        customerTelegramChatId = customer.telegramChatId;
      }

      const rawFrontendUrl = this.configService.get<string>('FRONTEND_URL') || 'https://www.amtrans.am/';
      const cleanFrontendUrl = rawFrontendUrl.trim().replace(/\/+$/, '');
      const orderUrl = `${cleanFrontendUrl}/dashboard/orders`;

      const displayPrice = order.estimatedPrice !== null && order.estimatedPrice !== undefined
        ? Number(order.estimatedPrice)
        : proposedPrice;

      const templateParams = {
        trackingNumber: order.trackingNumber || order.id,
        estimatedPrice: displayPrice,
        orderUrl,
      };

      const message = getEstimateSubmittedTelegramTemplate(templateParams);

      const promises: Promise<any>[] = [];

      // Channel 1: Telegram
      if (customerTelegramChatId && customerTelegramChatId.trim() !== '') {
        promises.push(
          this.telegramService.sendMessage(customerTelegramChatId.trim(), message, { parse_mode: 'HTML' }).catch((err: any) => {
            this.logger.warn(
              `Failed to send Telegram estimate notification to customer ${customerId} for order ${order.id}: ${err?.message || err}`,
            );
          }),
        );
      } else {
        this.logger.debug(
          `Customer ${customerId} has no telegramChatId for order ${order.id}. Telegram estimate notification skipped.`,
        );
      }

      // Channel 2: Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (customerEmail && emailRegex.test(customerEmail.trim())) {
        promises.push(
          this.emailService.sendUserEstimateNotification(
            customerEmail.trim(),
            templateParams,
          ).catch((err: any) => {
            this.logger.warn(
              `Failed to send estimate email to customer ${customerId} (${customerEmail}) for order ${order.id}: ${err?.message || err}`,
            );
          }),
        );
      } else {
        this.logger.warn(
          `Customer ${customerId} has no valid email for order ${order.id}. Email estimate notification skipped.`,
        );
      }

      await Promise.allSettled(promises);
    } catch (error: any) {
      this.logger.error(
        `Failed to send estimate notification for order ${order.id}: ${error?.message || error}`,
        error?.stack,
      );
    }
  }

  private async notifyOperatorsOfEstimateDecision(
    order: {
      id: string;
      trackingNumber?: string | null;
      fromOfficeId?: string | null;
      estimatedPrice?: Prisma.Decimal | number | null;
    },
    decision: 'accept' | 'cancel',
  ): Promise<void> {
    try {
      if (!order.fromOfficeId) {
        return;
      }

      const officeId = order.fromOfficeId.trim();

      // Find operators assigned to the order's origin office
      const operators = await this.prisma.user.findMany({
        where: {
          role: Role.OPERATOR,
          officeId,
          OR: [
            { telegramChatId: { not: null } },
            { email: { not: '' } },
          ],
        },
        select: {
          id: true,
          email: true,
          telegramChatId: true,
        },
      });

      const rawFrontendUrl = this.configService.get<string>('FRONTEND_URL') || 'https://www.amtrans.am/';
      const cleanFrontendUrl = rawFrontendUrl.trim().replace(/\/+$/, '');
      const orderUrl = `${cleanFrontendUrl}/dashboard/manage-orders/${order.id}`;

      const displayPrice = order.estimatedPrice !== null && order.estimatedPrice !== undefined
        ? Number(order.estimatedPrice)
        : 0;

      const templateParams = {
        trackingNumber: order.trackingNumber || order.id,
        estimatedPrice: displayPrice,
        orderUrl,
      };

      const message =
        decision === 'accept'
          ? getEstimateAcceptedTelegramTemplate(templateParams)
          : getEstimateCancelledTelegramTemplate(templateParams);

      // Telegram recipients: deduplicate by telegramChatId
      const validTelegramRecipients = operators.filter(
        (op) => op.telegramChatId && op.telegramChatId.trim() !== '',
      );
      const seenChatIds = new Set<string>();
      const uniqueTelegramRecipients = validTelegramRecipients.filter((op) => {
        const chatId = op.telegramChatId!.trim();
        if (seenChatIds.has(chatId)) return false;
        seenChatIds.add(chatId);
        return true;
      });

      // Email recipients: deduplicate by email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validEmailRecipients = operators.filter(
        (op) => op.email && emailRegex.test(op.email.trim()),
      );
      const seenEmails = new Set<string>();
      const uniqueEmailRecipients = validEmailRecipients.filter((op) => {
        const email = op.email.trim().toLowerCase();
        if (seenEmails.has(email)) return false;
        seenEmails.add(email);
        return true;
      });

      // Send via Telegram independently
      const telegramPromises = (message && uniqueTelegramRecipients.length > 0)
        ? uniqueTelegramRecipients.map(async (op) => {
          try {
            await this.telegramService.sendMessage(op.telegramChatId!.trim(), message, { parse_mode: 'HTML' });
          } catch (err: any) {
            this.logger.warn(
              `Failed to send Telegram estimate decision message to operator ${op.id} (chatId ${op.telegramChatId}) for order ${order.id}: ${err?.message || err}`,
            );
          }
        })
        : [];

      // Send via Email independently
      const emailPromises = (uniqueEmailRecipients.length > 0)
        ? uniqueEmailRecipients.map(async (op) => {
          try {
            await this.emailService.sendOperatorEstimateDecisionNotification(
              op.email.trim(),
              decision,
              templateParams,
            );
          } catch (err: any) {
            this.logger.warn(
              `Failed to send estimate decision email to operator ${op.id} (${op.email}) for order ${order.id}: ${err?.message || err}`,
            );
          }
        })
        : [];

      await Promise.allSettled([...telegramPromises, ...emailPromises]);
    } catch (error: any) {
      this.logger.error(
        `Failed to process dual-channel operator estimate decision notifications for order ${order.id} (${decision}): ${error?.message || error}`,
        error?.stack,
      );
    }
  }

  private async notifyCustomerOfStatusUpdate(
    order: {
      id: string;
      userId?: string | null;
      user?: { email?: string | null } | null;
      trackingNumber?: string | null;
      status: OrderStatus;
    },
    newStatus: OrderStatus,
  ): Promise<void> {
    try {
      if (!order.userId && !order.user?.email) {
        this.logger.debug(
          `No userId or user relation on order ${order.id}. Skipping customer status update notification (${newStatus}).`,
        );
        return;
      }

      let customerEmail = order.user?.email;
      let customerTelegramChatId: string | null | undefined;
      let customerId = order.userId || '';

      if (!customerEmail || customerTelegramChatId === undefined) {
        const customer = await this.prisma.user.findUnique({
          where: { id: order.userId! },
          select: { id: true, email: true, telegramChatId: true },
        });

        if (!customer) {
          this.logger.warn(
            `Customer user ${order.userId} not found for order ${order.id}. Status update notification skipped.`,
          );
          return;
        }

        customerId = customer.id;
        customerEmail = customer.email;
        customerTelegramChatId = customer.telegramChatId;
      }

      const rawFrontendUrl = this.configService.get<string>('FRONTEND_URL') || 'https://www.amtrans.am/';
      const cleanFrontendUrl = rawFrontendUrl.trim().replace(/\/+$/, '');
      const orderUrl = `${cleanFrontendUrl}/dashboard/orders`;

      const params = {
        trackingNumber: order.trackingNumber || order.id,
        orderUrl,
      };

      const message = getCustomerStatusUpdateTelegramTemplate(newStatus, params);

      const promises: Promise<any>[] = [];

      // Attempt Telegram channel
      if (message && customerTelegramChatId && customerTelegramChatId.trim() !== '') {
        promises.push(
          this.telegramService.sendMessage(customerTelegramChatId.trim(), message, { parse_mode: 'HTML' }).catch((err: any) => {
            this.logger.warn(
              `Failed to send Telegram status update notification to customer ${customerId} for order ${order.id} (${newStatus}): ${err?.message || err}`,
            );
          }),
        );
      } else {
        this.logger.debug(
          `Customer ${customerId} has no telegramChatId for order ${order.id}. Telegram status update notification skipped.`,
        );
      }

      // Attempt Email channel
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (customerEmail && emailRegex.test(customerEmail.trim())) {
        promises.push(
          this.emailService.sendUserOrderStatusUpdateNotification(
            customerEmail.trim(),
            newStatus,
            params,
          ).catch((err: any) => {
            this.logger.warn(
              `Failed to send status update email to customer ${customerId} (${customerEmail}) for order ${order.id} (${newStatus}): ${err?.message || err}`,
            );
          }),
        );
      } else {
        this.logger.warn(
          `Customer ${customerId} has no valid email for order ${order.id}. Email status update notification skipped.`,
        );
      }

      await Promise.allSettled(promises);
    } catch (error: any) {
      this.logger.error(
        `Failed to process dual-channel status update notification for order ${order.id} (${newStatus}): ${error?.message || error}`,
        error?.stack,
      );
    }
  }

  private validateInvoiceFile(file: Express.Multer.File) {
    if (!file || !file.buffer || file.buffer.length === 0) {
      throw new BadRequestException('Invoice file buffer is empty');
    }

    if (file.size && file.size > MAX_FILE_SIZE) {
      throw new BadRequestException(
        'Invoice file size exceeds the maximum limit of 10MB',
      );
    }

    if (file.buffer.length > MAX_FILE_SIZE) {
      throw new BadRequestException(
        'Invoice file size exceeds the maximum limit of 10MB',
      );
    }

    const isAllowedMime =
      ALLOWED_MIME_TYPES.includes(file.mimetype) ||
      file.mimetype?.startsWith('image/') ||
      file.mimetype === 'application/pdf';

    const isPdfExt =
      file.originalname && file.originalname.toLowerCase().endsWith('.pdf');
    const isImageExt =
      file.originalname &&
      /\.(jpg|jpeg|png|webp|gif|bmp)$/i.test(file.originalname);

    if (!isAllowedMime && !isPdfExt && !isImageExt) {
      throw new BadRequestException(
        'Invalid file type. Only images (JPEG, PNG, WEBP, GIF) and PDF files are allowed for invoices.',
      );
    }
  }

  private async generateAndUploadQrCode(orderId: string): Promise<string | null> {
    const frontendUrl =
      this.configService.get<string>('FRONTEND_URL') ||
      process.env.FRONTEND_URL ||
      'https://www.amtrans.am/';
    const cleanFrontendUrl = frontendUrl.trim().replace(/\/+$/, '');
    const qrContent = `${cleanFrontendUrl}/dashboard/manage-orders/${orderId}`;

    try {
      const qrBuffer = await QRCode.toBuffer(qrContent, {
        type: 'png',
        width: 300,
        margin: 2,
        errorCorrectionLevel: 'M',
      });

      const uploadResult = await this.uploadWithRetry(
        qrBuffer,
        'orders',
        3,
      );

      return uploadResult.secureUrl;
    } catch (error: any) {
      this.logger.error(
        `Failed to generate or upload QR code for order ${orderId}: ${error?.message || error}`,
      );
      return null;
    }
  }

  private async uploadWithRetry(
    file: { buffer: Buffer } | Buffer,
    folder: string,
    maxRetries = 3,
  ): Promise<CloudinaryUploadResult> {
    let lastError: any;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await this.cloudinaryService.uploadImage(file, folder);
      } catch (error: any) {
        lastError = error;
        this.logger.warn(
          `Cloudinary upload attempt ${attempt}/${maxRetries} to "${folder}" failed: ${error?.message || error}`,
        );
        if (attempt < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
        }
      }
    }
    throw lastError;
  }
}
