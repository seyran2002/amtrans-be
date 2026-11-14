import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';
import { Prisma } from '../../generated/prisma';

const tariffInclude = {
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
} as const;

@Injectable()
export class TariffsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.tariff.findMany({
      include: tariffInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByRoute(fromOfficeId: string, toOfficeId: string) {
    if (!fromOfficeId || !toOfficeId) {
      throw new BadRequestException(
        'Both fromOfficeId and toOfficeId query parameters are required',
      );
    }

    const tariff = await this.prisma.tariff.findFirst({
      where: {
        fromOfficeId,
        toOfficeId,
      },
      include: tariffInclude,
    });

    if (!tariff) {
      throw new NotFoundException(
        `Tariff for route from office "${fromOfficeId}" to office "${toOfficeId}" not found`,
      );
    }

    return tariff;
  }

  async findOne(id: string) {
    return this.ensureTariffExists(id);
  }

  async create(dto: CreateTariffDto) {
    await this.ensureOfficeExists(dto.fromOfficeId, 'From office');
    await this.ensureOfficeExists(dto.toOfficeId, 'To office');

    return this.prisma.tariff.create({
      data: {
        fromOfficeId: dto.fromOfficeId,
        toOfficeId: dto.toOfficeId,
        pricePerKg: dto.pricePerKg,
      },
      include: tariffInclude,
    });
  }

  async update(id: string, dto: UpdateTariffDto) {
    await this.ensureTariffExists(id);

    if (dto.fromOfficeId) {
      await this.ensureOfficeExists(dto.fromOfficeId, 'From office');
    }

    if (dto.toOfficeId) {
      await this.ensureOfficeExists(dto.toOfficeId, 'To office');
    }

    return this.prisma.tariff.update({
      where: { id },
      data: {
        ...(dto.fromOfficeId !== undefined && { fromOfficeId: dto.fromOfficeId }),
        ...(dto.toOfficeId !== undefined && { toOfficeId: dto.toOfficeId }),
        ...(dto.pricePerKg !== undefined && { pricePerKg: dto.pricePerKg }),
      },
      include: tariffInclude,
    });
  }

  async remove(id: string) {
    await this.ensureTariffExists(id);

    try {
      await this.prisma.tariff.delete({ where: { id } });
      return { message: 'Tariff deleted successfully' };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2003'
      ) {
        throw new BadRequestException(
          `Cannot delete tariff with id "${id}" because of database relations`,
        );
      }
      throw error;
    }
  }

  private async ensureTariffExists(id: string) {
    const tariff = await this.prisma.tariff.findUnique({
      where: { id },
      include: tariffInclude,
    });

    if (!tariff) {
      throw new NotFoundException(`Tariff with id "${id}" not found`);
    }

    return tariff;
  }

  private async ensureOfficeExists(officeId: string, label = 'Office') {
    const office = await this.prisma.office.findUnique({
      where: { id: officeId },
    });

    if (!office) {
      throw new NotFoundException(`${label} with id "${officeId}" not found`);
    }

    return office;
  }
}
