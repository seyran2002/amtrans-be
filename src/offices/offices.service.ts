import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { Role } from '../../generated/prisma';

const officeInclude = {
  country: {
    select: {
      id: true,
      hyName: true,
      ruName: true,
      enName: true,
      icon: true,
    },
  },
  operators: {
    where: {
      role: 'OPERATOR',
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      code: true,
      email: true,
      role: true,
    },
  },
} as const;

@Injectable()
export class OfficesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.office.findMany({
      include: officeInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(dto: CreateOfficeDto) {
    await this.ensureCountryExists(dto.countryId);

    return this.prisma.office.create({
      data: {
        countryId: dto.countryId,
        province: dto.province,
        city: dto.city,
        postalCode: dto.postalCode,
        fullAddress: dto.fullAddress,
        phone: dto.phone,
      },
      include: officeInclude,
    });
  }

  async update(id: string, dto: UpdateOfficeDto) {
    await this.ensureOfficeExists(id);

    if (dto.countryId) {
      await this.ensureCountryExists(dto.countryId);
    }

    return this.prisma.office.update({
      where: { id },
      data: dto,
      include: officeInclude,
    });
  }

  async remove(id: string) {
    await this.ensureOfficeExists(id);

    await this.prisma.office.delete({ where: { id } });

    return { message: 'Office deleted successfully' };
  }

  // ─── Operator Management ──────────────────────────────────────────────────

  async assignOperator(officeId: string, userId: string) {
    const office = await this.ensureOfficeExists(officeId);
    const user = await this.ensureUserExists(userId);

    if (user.role !== Role.OPERATOR) {
      throw new UnprocessableEntityException(
        `User "${userId}" does not have the OPERATOR role`,
      );
    }

    // Already assigned to this same office — idempotent, do nothing
    if (user.officeId === officeId) {
      const { password: _, ...safeUser } = user;
      return safeUser;
    }

    // Already assigned to a different office — 409 Conflict
    if (user.officeId !== null) {
      const currentOffice = await this.prisma.office.findUnique({
        where: { id: user.officeId },
        include: { country: { select: { enName: true } } },
      });
      const label = currentOffice
        ? `${currentOffice.city}, ${currentOffice.country.enName}`
        : user.officeId;
      throw new ConflictException(label);
    }

    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: { officeId },
    });

    const { password: _, ...safeUser } = updated;
    return safeUser;
  }

  async removeOperator(officeId: string, userId: string) {
    await this.ensureOfficeExists(officeId);
    const user = await this.ensureUserExists(userId);

    if (user.role !== Role.OPERATOR) {
      throw new UnprocessableEntityException(
        `User "${userId}" does not have the OPERATOR role`,
      );
    }

    if (user.officeId !== officeId) {
      throw new NotFoundException(
        `Operator "${userId}" is not assigned to office "${officeId}"`,
      );
    }

    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: { officeId: null },
    });

    const { password: _, ...safeUser } = updated;
    return safeUser;
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private async ensureCountryExists(countryId: string) {
    const country = await this.prisma.country.findUnique({
      where: { id: countryId },
    });

    if (!country) {
      throw new NotFoundException(`Country with id "${countryId}" not found`);
    }

    return country;
  }

  private async ensureOfficeExists(id: string) {
    const office = await this.prisma.office.findUnique({
      where: { id },
      include: { country: { select: { enName: true } } },
    });

    if (!office) {
      throw new NotFoundException(`Office with id "${id}" not found`);
    }

    return office;
  }

  private async ensureUserExists(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException(`User with id "${userId}" not found`);
    }

    return user;
  }
}
