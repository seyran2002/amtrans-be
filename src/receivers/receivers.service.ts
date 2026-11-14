import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ReceiversService {
  constructor(private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) { }

  async create(userId: string, dto: CreateReceiverDto) {
    const prefix = dto.firstName || 'RCV';
    const code = await this.usersService.generateUniqueCode(prefix, 'receiver');

    return this.prisma.receiver.create({
      data: {
        ...dto,
        code,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.receiver.findMany({
      where: { userId },
    });
  }

  async findOne(userId: string, receiverId: string) {
    const receiver = await this.prisma.receiver.findFirst({
      where: { id: receiverId, userId },
    });

    if (!receiver) {
      throw new NotFoundException('Receiver not found');
    }

    return receiver;
  }

  async update(userId: string, receiverId: string, dto: UpdateReceiverDto) {
    const receiver = await this.prisma.receiver.findFirst({
      where: { id: receiverId, userId },
    });

    if (!receiver) {
      throw new NotFoundException('Receiver not found');
    }

    return this.prisma.receiver.update({
      where: { id: receiverId },
      data: dto,
    });
  }

  async remove(userId: string, receiverId: string) {
    const receiver = await this.prisma.receiver.findFirst({
      where: { id: receiverId, userId },
    });

    if (!receiver) {
      throw new NotFoundException('Receiver not found');
    }

    await this.prisma.receiver.delete({
      where: { id: receiverId },
    });

    return { message: 'Receiver deleted successfully' };
  }
}

