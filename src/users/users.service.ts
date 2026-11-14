import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { Role, UserStatus } from '../../generated/prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return users.map(({ password: _, ...safeUser }) => safeUser);
  }

  async findAllOperators() {
    const users = await this.prisma.user.findMany({
      where: { role: Role.OPERATOR },
      orderBy: { createdAt: 'desc' },
    });

    return users.map(({ password: _, ...safeUser }) => safeUser);
  }

  async updateUserRole(userId: string, dto: UpdateUserRoleDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        role: dto.role,
      },
    });

    const { password: _, ...safeUser } = updatedUser;
    return safeUser;
  }

  async updateSupporterStatus(targetUserId: string, isSupporter: boolean) {
    const user = await this.prisma.user.findUnique({
      where: { id: targetUserId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: targetUserId },
      data: {
        isSupporter,
      },
    });

    const { password: _, ...safeUser } = updatedUser;
    return safeUser;
  }



  public async generateUniqueCode(
    prefix: string,
    table: 'user' | 'receiver' = 'user',
  ): Promise<string> {
    const cleanPrefix = (prefix || 'USER').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    let code = '';
    let isUnique = false;
    let attempts = 0;

    while (!isUnique && attempts < 100) {
      attempts++;
      const randomDigits = Math.floor(100000 + Math.random() * 900000);
      code =
        table === 'receiver'
          ? `RCV-${cleanPrefix || 'RCV'}${randomDigits}`
          : `${cleanPrefix || 'AM'}-AM${randomDigits}`;

      // Always check BOTH tables so the same code can never exist for any user OR any receiver
      const [existingUser, existingReceiver] = await Promise.all([
        this.prisma.user.findFirst({ where: { code } }),
        this.prisma.receiver.findFirst({ where: { code } }),
      ]);

      if (!existingUser && !existingReceiver) {
        isUnique = true;
      }
    }

    if (!isUnique) {
      code = `AM-${Date.now().toString().slice(-8)}`;
    }

    return code;
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    let code = user.code;
    if (!code) {
      const prefix = dto.isIndividual ? (dto.firstName || 'USER') : (dto.companyName || 'CORP');
      code = await this.generateUniqueCode(prefix);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        isIndividual: dto.isIndividual,
        firstName: dto.isIndividual ? dto.firstName : null,
        lastName: dto.isIndividual ? dto.lastName : null,
        address: dto.address,
        phoneNumber: dto.phoneNumber,
        hyDocumentType: dto.isIndividual ? dto.hyDocumentType : null,
        enDocumentType: dto.isIndividual ? dto.enDocumentType : null,
        ruDocumentType: dto.isIndividual ? dto.ruDocumentType : null,
        documentNumber: dto.isIndividual ? dto.documentNumber : null,
        companyName: !dto.isIndividual ? dto.companyName : null,
        taxpayerId: !dto.isIndividual ? dto.taxpayerId : null,
        code,
        status: UserStatus.ACTIVE,
      },
    });

    const { password: _, ...safeUser } = updatedUser;
    return safeUser;
  }

  async getUserById(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { password: _, ...safeUser } = user;
    return safeUser;
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(dto.currentPassword, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
    });

    return {
      message: 'Password changed successfully',
    };
  }
}
