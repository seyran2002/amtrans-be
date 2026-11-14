import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { EmailService } from '../email/email.service';
import { TelegramService } from '../telegram/telegram.service';
import { Currency, OrderStatus, Prisma, Role } from '../../generated/prisma';
import { UserFromJwt } from '../auth/jwt.strategy';
import { CreateOrderDto } from './dto/create-order.dto';
import { SubmitEstimateDto } from './dto/submit-estimate.dto';
import { EstimateAction } from './dto/respond-estimate.dto';

describe('OrdersService', () => {
  let service: OrdersService;
  let telegramService: { sendMessage: jest.Mock };
  let prisma: {
    office: { findUnique: jest.Mock };
    receiver: { findUnique: jest.Mock };
    tariff: { findFirst: jest.Mock };
    order: {
      create: jest.Mock;
      update: jest.Mock;
      updateMany: jest.Mock;
      findUnique: jest.Mock;
      findUniqueOrThrow: jest.Mock;
      findMany: jest.Mock;
    };
    user: { findMany: jest.Mock };
    $queryRaw: jest.Mock;
    $executeRaw: jest.Mock;
    $transaction: jest.Mock;
  };

  const mockCustomerUser: UserFromJwt = {
    id: 'user-uuid-1',
    email: 'user@example.com',
    role: Role.CUSTOMER,
  };

  const mockOperatorUser: UserFromJwt = {
    id: 'operator-uuid-1',
    email: 'operator@example.com',
    role: Role.OPERATOR,
    officeId: 'office-1',
  };

  const mockAdminUser: UserFromJwt = {
    id: 'admin-uuid-1',
    email: 'admin@example.com',
    role: Role.ADMIN,
  };

  const mockDto: CreateOrderDto = {
    fromOfficeId: 'office-1',
    toOfficeId: 'office-2',
    receiverId: 'receiver-1',
    pieceCount: 1,
    productPrice: 100,
    price: 15,
    currency: Currency.USD,
    marketName: 'Amazon',
    productDescription: 'Headphones',
    weight: 1.5,
    length: 20,
    width: 15,
    height: 10,
  };

  beforeEach(async () => {
    prisma = {
      office: {
        findUnique: jest.fn().mockImplementation(({ where }) =>
          Promise.resolve({ id: where.id, city: 'Yerevan' }),
        ),
      },
      receiver: {
        findUnique: jest.fn().mockResolvedValue({
          id: 'receiver-1',
          userId: 'user-uuid-1',
        }),
      },
      tariff: {
        findFirst: jest.fn().mockResolvedValue({
          id: 'tariff-1',
          fromOfficeId: 'office-1',
          toOfficeId: 'office-2',
          pricePerKg: new Prisma.Decimal(10),
        }),
      },
      order: {
        create: jest.fn(),
        update: jest.fn(),
        updateMany: jest.fn(),
        findUnique: jest.fn(),
        findUniqueOrThrow: jest.fn(),
        findMany: jest.fn(),
      },
      user: {
        findMany: jest.fn().mockResolvedValue([]),
        findUnique: jest.fn().mockResolvedValue(null),
      },
      $queryRaw: jest.fn(),
      $executeRaw: jest.fn(),
      $transaction: jest.fn().mockImplementation(async (callback) => {
        return callback(prisma);
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        { provide: PrismaService, useValue: prisma },
        {
          provide: CloudinaryService,
          useValue: {
            uploadImage: jest.fn().mockResolvedValue({ secureUrl: 'https://cdn.example.com/file' }),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'FRONTEND_URL') return 'http://localhost:5173';
              return null;
            }),
          },
        },
        {
          provide: EmailService,
          useValue: {
            sendOrderReviewNotification: jest.fn().mockResolvedValue(undefined),
            sendOrderNotificationEmail: jest.fn().mockResolvedValue(undefined),
            sendUserOrderStatusUpdateNotification: jest.fn().mockResolvedValue(undefined),
            sendUserEstimateNotification: jest.fn().mockResolvedValue(undefined),
            sendOperatorOrderNotification: jest.fn().mockResolvedValue(undefined),
            sendOperatorEstimateDecisionNotification: jest.fn().mockResolvedValue(undefined),
          },
        },
        {
          provide: TelegramService,
          useValue: {
            sendMessage: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    telegramService = module.get(TelegramService);
  });

  describe('generateTrackingNumber', () => {
    it('should generate tracking number matching AMT-XXXXXX with 6 uppercase alphanumeric characters', () => {
      const trackingNumberRegex = /^AMT-[0-9A-Z]{6}$/;

      for (let i = 0; i < 50; i++) {
        const tracking = service.generateTrackingNumber();
        expect(tracking).toMatch(trackingNumberRegex);
        expect(tracking.startsWith('AMT-')).toBe(true);
        expect(tracking.length).toBe(10);
      }
    });

    it('should produce unique tracking numbers across multiple generations', () => {
      const set = new Set<string>();
      const iterations = 100;
      for (let i = 0; i < iterations; i++) {
        set.add(service.generateTrackingNumber());
      }
      expect(set.size).toBe(iterations);
    });
  });

  describe('create', () => {
    it('should assign status UNDER_REVIEW when tariff exists for the route', async () => {
      prisma.order.create.mockImplementation(({ data }) =>
        Promise.resolve({
          id: 'order-1',
          ...data,
          status: OrderStatus.UNDER_REVIEW,
        }),
      );

      prisma.order.update.mockImplementation(({ data }) =>
        Promise.resolve({
          id: 'order-1',
          trackingNumber: 'AMT-ABC123',
          ...data,
          status: OrderStatus.UNDER_REVIEW,
        }),
      );

      const result = await service.create(mockCustomerUser, mockDto);

      expect(prisma.order.create).toHaveBeenCalledTimes(1);
      const createdData = prisma.order.create.mock.calls[0][0].data;
      expect(createdData.trackingNumber).toMatch(/^AMT-[0-9A-Z]{6}$/);
      expect(createdData.status).toBe(OrderStatus.UNDER_REVIEW);
      expect(result.trackingNumber).toBeDefined();
    });

    it('should assign status PENDING_ESTIMATE when no tariff exists for route without requiring price', async () => {
      prisma.tariff.findFirst.mockResolvedValue(null);

      const dtoWithoutPrice = { ...mockDto, price: undefined };

      prisma.order.create.mockImplementation(({ data }) =>
        Promise.resolve({
          id: 'order-pending-1',
          ...data,
          status: OrderStatus.PENDING_ESTIMATE,
        }),
      );

      prisma.order.update.mockImplementation(({ data }) =>
        Promise.resolve({
          id: 'order-pending-1',
          ...data,
        }),
      );

      const result = await service.create(mockCustomerUser, dtoWithoutPrice);

      expect(prisma.order.create).toHaveBeenCalledTimes(1);
      const createdData = prisma.order.create.mock.calls[0][0].data;
      expect(createdData.status).toBe(OrderStatus.PENDING_ESTIMATE);
      expect(createdData.price).toBe(0);
      expect(result.id).toBe('order-pending-1');
    });

    it('should require price when tariff exists for route', async () => {
      const dtoWithoutPrice = { ...mockDto, price: undefined };

      await expect(service.create(mockCustomerUser, dtoWithoutPrice)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should retry when unique constraint conflict (P2002) occurs and succeed on next attempt', async () => {
      const p2002Error = new Prisma.PrismaClientKnownRequestError(
        'Unique constraint failed on the fields: (`trackingNumber`)',
        {
          code: 'P2002',
          clientVersion: '7.10.0',
          meta: { target: ['trackingNumber'] },
        },
      );

      prisma.order.create
        .mockRejectedValueOnce(p2002Error)
        .mockImplementationOnce(({ data }) =>
          Promise.resolve({
            id: 'order-retry-success',
            ...data,
            status: OrderStatus.UNDER_REVIEW,
          }),
        );

      prisma.order.update.mockImplementation(({ data }) =>
        Promise.resolve({
          id: 'order-retry-success',
          ...data,
          status: OrderStatus.UNDER_REVIEW,
        }),
      );

      const result = await service.create(mockCustomerUser, mockDto);

      expect(prisma.order.create).toHaveBeenCalledTimes(2);
      expect(result.id).toBe('order-retry-success');
    });

    it('should throw InternalServerErrorException when maximum retry attempts are exhausted', async () => {
      const p2002Error = new Prisma.PrismaClientKnownRequestError(
        'Unique constraint failed on the fields: (`trackingNumber`)',
        {
          code: 'P2002',
          clientVersion: '7.10.0',
          meta: { target: ['trackingNumber'] },
        },
      );

      prisma.order.create.mockRejectedValue(p2002Error);

      await expect(service.create(mockCustomerUser, mockDto)).rejects.toThrow(
        InternalServerErrorException,
      );
      expect(prisma.order.create).toHaveBeenCalledTimes(5);
    });

    it('should send Telegram notification to operators with telegramChatId when order is created with UNDER_REVIEW status', async () => {
      const createdOrder = {
        id: 'order-101',
        trackingNumber: 'AMT-ABC123',
        status: OrderStatus.UNDER_REVIEW,
        fromOfficeId: 'office-1',
        toOfficeId: 'office-2',
        fromOffice: { city: 'Yerevan', province: 'Yerevan' },
      };

      prisma.order.create.mockResolvedValue(createdOrder);
      prisma.user.findMany.mockResolvedValue([
        { id: 'op-1', telegramChatId: '12345678' },
        { id: 'op-2', telegramChatId: null },
      ]);

      const result = await service.create(mockCustomerUser, mockDto);

      expect(result.id).toBe('order-101');
      expect(telegramService.sendMessage).toHaveBeenCalledTimes(1);
      const [chatId, message] = telegramService.sendMessage.mock.calls[0];
      expect(chatId).toBe('12345678');
      expect(message).toContain('📦 Նոր պատվեր է գրանցվել');
      expect(message).toContain('📦 New Order Created');
      expect(message).toContain('📦 Создан новый заказ');
      expect(message).toContain('AMT-ABC123');
      expect(message).toContain('http://localhost:5173/dashboard/manage-orders/order-101');
    });

    it('should send Telegram notification with estimate required template when order is created with PENDING_ESTIMATE status', async () => {
      prisma.tariff.findFirst.mockResolvedValue(null);

      const createdOrder = {
        id: 'order-pending-102',
        trackingNumber: 'AMT-XYZ999',
        status: OrderStatus.PENDING_ESTIMATE,
        fromOfficeId: 'office-1',
        toOfficeId: 'office-2',
        fromOffice: { city: 'Yerevan', province: 'Armenia' },
      };

      prisma.order.create.mockResolvedValue(createdOrder);
      prisma.user.findMany.mockResolvedValue([
        { id: 'op-1', telegramChatId: '88889999' },
      ]);

      const dtoWithoutPrice = { ...mockDto, price: undefined };
      const result = await service.create(mockCustomerUser, dtoWithoutPrice);

      expect(result.id).toBe('order-pending-102');
      expect(telegramService.sendMessage).toHaveBeenCalledTimes(1);
      const [chatId, message] = telegramService.sendMessage.mock.calls[0];
      expect(chatId).toBe('88889999');
      expect(message).toContain('📦 Նոր պատվեր․ անհրաժեշտ է գնահատել առաքման արժեքը');
      expect(message).toContain('📦 New Order: Shipping Price Estimate Required');
      expect(message).toContain('📦 Новый заказ: требуется оценка стоимости доставки');
      expect(message).toContain('AMT-XYZ999');
      expect(message).toContain('http://localhost:5173/dashboard/manage-orders/order-pending-102');
    });

    it('should not fail order creation if Telegram sending fails', async () => {
      const createdOrder = {
        id: 'order-103',
        trackingNumber: 'AMT-ERR001',
        status: OrderStatus.UNDER_REVIEW,
        fromOfficeId: 'office-1',
        toOfficeId: 'office-2',
        fromOffice: { city: 'Yerevan', province: 'Yerevan' },
      };

      prisma.order.create.mockResolvedValue(createdOrder);
      prisma.user.findMany.mockResolvedValue([
        { id: 'op-1', telegramChatId: '12345678' },
      ]);
      telegramService.sendMessage.mockRejectedValue(new Error('Network error'));

      const result = await service.create(mockCustomerUser, mockDto);

      expect(result.id).toBe('order-103');
    });
  });

  describe('submitEstimate', () => {
    const pendingOrder = {
      id: 'order-pending-1',
      fromOfficeId: 'office-1',
      toOfficeId: 'office-2',
      userId: 'user-uuid-1',
      status: OrderStatus.PENDING_ESTIMATE,
      estimatedPrice: null,
    };

    it('should allow authorized operator at origin office to submit positive estimate', async () => {
      prisma.order.findUnique.mockResolvedValue(pendingOrder);
      prisma.order.update.mockImplementation(({ data }) =>
        Promise.resolve({
          ...pendingOrder,
          ...data,
        }),
      );

      const dto: SubmitEstimateDto = { estimatedPrice: 7500 };
      const result = await service.submitEstimate(pendingOrder.id, mockOperatorUser, dto);

      expect(prisma.order.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: pendingOrder.id },
          data: expect.objectContaining({
            estimatedById: mockOperatorUser.id,
            estimatedAt: expect.any(Date),
          }),
        }),
      );
      expect(result.estimatedById).toBe(mockOperatorUser.id);
    });

    it('should allow admin from any office to submit estimate', async () => {
      prisma.order.findUnique.mockResolvedValue(pendingOrder);
      prisma.order.update.mockImplementation(({ data }) =>
        Promise.resolve({
          ...pendingOrder,
          ...data,
        }),
      );

      const dto: SubmitEstimateDto = { estimatedPrice: 8000 };
      const result = await service.submitEstimate(pendingOrder.id, mockAdminUser, dto);

      expect(result.estimatedById).toBe(mockAdminUser.id);
    });

    it('should forbid operator from different office from submitting estimate', async () => {
      prisma.order.findUnique.mockResolvedValue(pendingOrder);
      const otherOfficeOperator = { ...mockOperatorUser, officeId: 'other-office' };

      const dto: SubmitEstimateDto = { estimatedPrice: 7500 };
      await expect(
        service.submitEstimate(pendingOrder.id, otherOfficeOperator, dto),
      ).rejects.toThrow(ForbiddenException);
    });

    it('should forbid customer from submitting estimate', async () => {
      prisma.order.findUnique.mockResolvedValue(pendingOrder);

      const dto: SubmitEstimateDto = { estimatedPrice: 7500 };
      await expect(
        service.submitEstimate(pendingOrder.id, mockCustomerUser, dto),
      ).rejects.toThrow(ForbiddenException);
    });

    it('should reject estimate for non-PENDING_ESTIMATE order', async () => {
      prisma.order.findUnique.mockResolvedValue({
        ...pendingOrder,
        status: OrderStatus.REGISTERED,
      });

      const dto: SubmitEstimateDto = { estimatedPrice: 7500 };
      await expect(
        service.submitEstimate(pendingOrder.id, mockOperatorUser, dto),
      ).rejects.toThrow(BadRequestException);
    });

    it('should prevent duplicate estimate overwrites (ConflictException)', async () => {
      prisma.order.findUnique.mockResolvedValue({
        ...pendingOrder,
        estimatedPrice: new Prisma.Decimal(5000),
      });

      const dto: SubmitEstimateDto = { estimatedPrice: 7500 };
      await expect(
        service.submitEstimate(pendingOrder.id, mockOperatorUser, dto),
      ).rejects.toThrow(ConflictException);
    });

    it('should reject non-positive estimate price', async () => {
      prisma.order.findUnique.mockResolvedValue(pendingOrder);

      const dto: SubmitEstimateDto = { estimatedPrice: 0 };
      await expect(
        service.submitEstimate(pendingOrder.id, mockOperatorUser, dto),
      ).rejects.toThrow(BadRequestException);
    });

    it('should send Telegram notification to customer with valid telegramChatId when estimate is successfully submitted', async () => {
      prisma.order.findUnique.mockResolvedValue({
        ...pendingOrder,
        trackingNumber: 'AMT-EST123',
      });
      prisma.order.update.mockImplementation(({ data }) =>
        Promise.resolve({
          ...pendingOrder,
          trackingNumber: 'AMT-EST123',
          ...data,
        }),
      );
      prisma.user.findUnique.mockResolvedValue({
        id: 'user-uuid-1',
        telegramChatId: 'customer-chat-999',
      });

      const dto: SubmitEstimateDto = { estimatedPrice: 7500 };
      const result = await service.submitEstimate(pendingOrder.id, mockOperatorUser, dto);

      expect(result.id).toBe(pendingOrder.id);
      expect(telegramService.sendMessage).toHaveBeenCalledTimes(1);
      const [chatId, message] = telegramService.sendMessage.mock.calls[0];
      expect(chatId).toBe('customer-chat-999');
      expect(message).toContain('💰 **Ձեր առաքման արժեքը գնահատվել է**');
      expect(message).toContain('💰 **Your Shipping Price Has Been Estimated**');
      expect(message).toContain('💰 **Стоимость доставки вашего заказа рассчитана**');
      expect(message).toContain('AMT-EST123');
      expect(message).toContain('7500 AMD');
      expect(message).toContain('http://localhost:5173/dashboard/orders');
    });

    it('should skip Telegram notification when customer has no telegramChatId', async () => {
      prisma.order.findUnique.mockResolvedValue(pendingOrder);
      prisma.order.update.mockImplementation(({ data }) =>
        Promise.resolve({
          ...pendingOrder,
          ...data,
        }),
      );
      prisma.user.findUnique.mockResolvedValue({
        id: 'user-uuid-1',
        telegramChatId: null,
      });

      const dto: SubmitEstimateDto = { estimatedPrice: 7500 };
      await service.submitEstimate(pendingOrder.id, mockOperatorUser, dto);

      expect(telegramService.sendMessage).not.toHaveBeenCalled();
    });

    it('should not fail estimate submission if Telegram sending fails', async () => {
      prisma.order.findUnique.mockResolvedValue(pendingOrder);
      prisma.order.update.mockImplementation(({ data }) =>
        Promise.resolve({
          ...pendingOrder,
          ...data,
        }),
      );
      prisma.user.findUnique.mockResolvedValue({
        id: 'user-uuid-1',
        telegramChatId: 'customer-chat-err',
      });
      telegramService.sendMessage.mockRejectedValue(new Error('Network error'));

      const dto: SubmitEstimateDto = { estimatedPrice: 7500 };
      const result = await service.submitEstimate(pendingOrder.id, mockOperatorUser, dto);

      expect(result.id).toBe(pendingOrder.id);
    });
  });

  describe('acceptEstimate', () => {
    const estimatedOrder = {
      id: 'order-est-1',
      trackingNumber: 'AMT-ACC123',
      fromOfficeId: 'office-1',
      userId: 'user-uuid-1',
      status: OrderStatus.PENDING_ESTIMATE,
      estimatedPrice: new Prisma.Decimal(9200),
    };

    it('should allow order owner to accept estimate and atomically transition to REGISTERED', async () => {
      prisma.order.findUnique.mockResolvedValue(estimatedOrder);
      prisma.order.updateMany.mockResolvedValue({ count: 1 });
      prisma.order.findUniqueOrThrow.mockResolvedValue({
        ...estimatedOrder,
        price: estimatedOrder.estimatedPrice,
        status: OrderStatus.REGISTERED,
      });

      const result = await service.acceptEstimate(estimatedOrder.id, mockCustomerUser);

      expect(prisma.order.updateMany).toHaveBeenCalledWith({
        where: {
          id: estimatedOrder.id,
          status: OrderStatus.PENDING_ESTIMATE,
        },
        data: {
          price: estimatedOrder.estimatedPrice,
          status: OrderStatus.REGISTERED,
        },
      });
      expect(result.status).toBe(OrderStatus.REGISTERED);
    });

    it('should forbid non-owner customer from accepting estimate', async () => {
      prisma.order.findUnique.mockResolvedValue(estimatedOrder);
      const anotherCustomer = { ...mockCustomerUser, id: 'intruder-uuid' };

      await expect(
        service.acceptEstimate(estimatedOrder.id, anotherCustomer),
      ).rejects.toThrow(ForbiddenException);
    });

    it('should reject acceptance if no estimate has been submitted', async () => {
      prisma.order.findUnique.mockResolvedValue({
        ...estimatedOrder,
        estimatedPrice: null,
      });

      await expect(
        service.acceptEstimate(estimatedOrder.id, mockCustomerUser),
      ).rejects.toThrow(BadRequestException);
    });

    it('should reject acceptance if order is not in PENDING_ESTIMATE status', async () => {
      prisma.order.findUnique.mockResolvedValue({
        ...estimatedOrder,
        status: OrderStatus.CANCELLED,
      });

      await expect(
        service.acceptEstimate(estimatedOrder.id, mockCustomerUser),
      ).rejects.toThrow(BadRequestException);
    });

    it('should send Telegram notification to origin office operators when estimate is accepted', async () => {
      prisma.order.findUnique.mockResolvedValue(estimatedOrder);
      prisma.order.updateMany.mockResolvedValue({ count: 1 });
      prisma.order.findUniqueOrThrow.mockResolvedValue({
        ...estimatedOrder,
        price: estimatedOrder.estimatedPrice,
        status: OrderStatus.REGISTERED,
      });
      prisma.user.findMany.mockResolvedValue([
        { id: 'op-1', telegramChatId: 'chat-op-1' },
      ]);

      await service.acceptEstimate(estimatedOrder.id, mockCustomerUser);

      expect(telegramService.sendMessage).toHaveBeenCalledTimes(1);
      const [chatId, message] = telegramService.sendMessage.mock.calls[0];
      expect(chatId).toBe('chat-op-1');
      expect(message).toContain('✅ Հաճախորդը հաստատել է առաքման արժեքը');
      expect(message).toContain('✅ Customer Accepted the Shipping Estimate');
      expect(message).toContain('✅ Клиент принял предложенную стоимость доставки');
      expect(message).toContain('AMT-ACC123');
      expect(message).toContain('9200 AMD');
      expect(message).toContain('http://localhost:5173/dashboard/manage-orders/order-est-1');
    });
  });

  describe('cancelEstimate', () => {
    const pendingOrder = {
      id: 'order-cancel-1',
      userId: 'user-uuid-1',
      status: OrderStatus.PENDING_ESTIMATE,
    };

    it('should allow order owner to cancel inquiry and transition to CANCELLED', async () => {
      prisma.order.findUnique.mockResolvedValue(pendingOrder);
      prisma.order.updateMany.mockResolvedValue({ count: 1 });
      prisma.order.findUniqueOrThrow.mockResolvedValue({
        ...pendingOrder,
        status: OrderStatus.CANCELLED,
      });

      const result = await service.cancelEstimate(pendingOrder.id, mockCustomerUser);

      expect(prisma.order.updateMany).toHaveBeenCalledWith({
        where: {
          id: pendingOrder.id,
          status: OrderStatus.PENDING_ESTIMATE,
        },
        data: {
          status: OrderStatus.CANCELLED,
        },
      });
      expect(result.status).toBe(OrderStatus.CANCELLED);
    });

    it('should forbid non-owner customer from cancelling inquiry', async () => {
      prisma.order.findUnique.mockResolvedValue(pendingOrder);
      const anotherCustomer = { ...mockCustomerUser, id: 'intruder-uuid' };

      await expect(
        service.cancelEstimate(pendingOrder.id, anotherCustomer),
      ).rejects.toThrow(ForbiddenException);
    });

    it('should send Telegram notification to origin office operators when estimate is cancelled', async () => {
      const cancelOrder = {
        ...pendingOrder,
        trackingNumber: 'AMT-CNC999',
        fromOfficeId: 'office-1',
        estimatedPrice: new Prisma.Decimal(5000),
      };
      prisma.order.findUnique.mockResolvedValue(cancelOrder);
      prisma.order.updateMany.mockResolvedValue({ count: 1 });
      prisma.order.findUniqueOrThrow.mockResolvedValue({
        ...cancelOrder,
        status: OrderStatus.CANCELLED,
      });
      prisma.user.findMany.mockResolvedValue([
        { id: 'op-1', telegramChatId: 'chat-op-2' },
      ]);

      await service.cancelEstimate(cancelOrder.id, mockCustomerUser);

      expect(telegramService.sendMessage).toHaveBeenCalledTimes(1);
      const [chatId, message] = telegramService.sendMessage.mock.calls[0];
      expect(chatId).toBe('chat-op-2');
      expect(message).toContain('❌ Հաճախորդը մերժել է առաքման արժեքի առաջարկը');
      expect(message).toContain('❌ Customer Rejected the Shipping Estimate');
      expect(message).toContain('❌ Клиент отклонил предложенную стоимость доставки');
      expect(message).toContain('AMT-CNC999');
      expect(message).toContain('5000 AMD');
      expect(message).toContain('http://localhost:5173/dashboard/manage-orders/order-cancel-1');
    });
  });

  describe('respondToEstimate', () => {
    it('should delegate to acceptEstimate on action=accept', async () => {
      const spy = jest.spyOn(service, 'acceptEstimate').mockResolvedValue({} as any);

      await service.respondToEstimate('order-1', mockCustomerUser, {
        action: EstimateAction.ACCEPT,
      });

      expect(spy).toHaveBeenCalledWith('order-1', mockCustomerUser);
    });

    it('should delegate to cancelEstimate on action=cancel', async () => {
      const spy = jest.spyOn(service, 'cancelEstimate').mockResolvedValue({} as any);

      await service.respondToEstimate('order-1', mockCustomerUser, {
        action: EstimateAction.CANCEL,
      });

      expect(spy).toHaveBeenCalledWith('order-1', mockCustomerUser);
    });
  });

  describe('updateStatus protection', () => {
    it('should not allow operator to directly change PENDING_ESTIMATE to REGISTERED without customer approval', async () => {
      prisma.order.findUnique.mockResolvedValue({
        id: 'order-pending-1',
        status: OrderStatus.PENDING_ESTIMATE,
      });

      await expect(
        service.updateStatus('order-pending-1', OrderStatus.REGISTERED),
      ).rejects.toThrow(BadRequestException);
    });

    it('should not allow changing status of already CANCELLED order', async () => {
      prisma.order.findUnique.mockResolvedValue({
        id: 'order-cancelled-1',
        status: OrderStatus.CANCELLED,
      });

      await expect(
        service.updateStatus('order-cancelled-1', OrderStatus.REGISTERED),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('findMyOrders', () => {
    it('should include trackingNumber and estimatedPrice in select projection', async () => {
      prisma.order.findMany.mockResolvedValue([
        {
          id: 'order-1',
          trackingNumber: 'AMT-123XYZ',
          status: OrderStatus.PENDING_ESTIMATE,
          estimatedPrice: new Prisma.Decimal(5000),
        },
      ]);

      const orders = await service.findMyOrders('user-uuid-1');

      expect(prisma.order.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { userId: 'user-uuid-1' },
          select: expect.objectContaining({
            id: true,
            trackingNumber: true,
            status: true,
            estimatedPrice: true,
          }),
        }),
      );
      expect(orders[0].trackingNumber).toBe('AMT-123XYZ');
    });
  });

  describe('backfillTrackingNumbers', () => {
    it('should safely backfill tracking numbers for existing orders without tracking numbers', async () => {
      prisma.$queryRaw.mockResolvedValue([{ id: 'old-order-1' }, { id: 'old-order-2' }]);
      prisma.$executeRaw.mockResolvedValue(1);

      const count = await service.backfillTrackingNumbers();

      expect(count).toBe(2);
      expect(prisma.$executeRaw).toHaveBeenCalledTimes(2);
    });

    it('should return 0 when all orders already have tracking numbers', async () => {
      prisma.$queryRaw.mockResolvedValue([]);

      const count = await service.backfillTrackingNumbers();

      expect(count).toBe(0);
      expect(prisma.$executeRaw).not.toHaveBeenCalled();
    });
  });
});
