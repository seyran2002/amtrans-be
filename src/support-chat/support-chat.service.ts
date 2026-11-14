import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetMessagesDto } from './dto/get-messages.dto';
import { SenderType, SupportChat, SupportMessage } from '../../generated/prisma';
import { Role } from '../../generated/prisma';

@Injectable()
export class SupportChatService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrCreateChat(userId: string): Promise<SupportChat> {
    let chat = await this.prisma.supportChat.findUnique({
      where: { userId },
    });

    if (!chat) {
      chat = await this.prisma.supportChat.create({
        data: { userId },
      });
    }

    return chat;
  }

  async getAdminChats() {
    const chats = await this.prisma.supportChat.findMany({
      where: {
        user: {
          role: Role.CUSTOMER,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            code: true,
            phoneNumber: true,
          },
        },
        messages: {
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
        _count: {
          select: {
            messages: {
              where: {
                senderType: SenderType.CUSTOMER,
                isRead: false,
              },
            },
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    return chats.map(({ _count, ...chat }) => ({
      ...chat,
      unreadCount: _count?.messages ?? 0,
    }));
  }

  async getMessages(dto: GetMessagesDto): Promise<{
    messages: SupportMessage[];
    hasMore: boolean;
    nextCursor: string | null;
  }> {
    const limit = dto.limit ?? 15;

    const messages = await this.prisma.supportMessage.findMany({
      where: { chatId: dto.chatId },
      take: limit + 1,
      skip: dto.cursor ? 1 : 0,
      cursor: dto.cursor ? { id: dto.cursor } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    let hasMore = false;
    let nextCursor: string | null = null;

    if (messages.length > limit) {
      hasMore = true;
      messages.pop();
      nextCursor = messages[messages.length - 1]?.id ?? null;
    }

    messages.reverse();

    return {
      messages,
      hasMore,
      nextCursor,
    };
  }

  async saveMessage(data: {
    chatId: string;
    senderId: string;
    senderType: 'CUSTOMER' | 'SUPPORTER';
    text: string;
  }): Promise<SupportMessage> {
    const message = await this.prisma.supportMessage.create({
      data: {
        chatId: data.chatId,
        senderId: data.senderId,
        senderType: data.senderType as SenderType,
        text: data.text,
      },
    });

    await this.prisma.supportChat.update({
      where: { id: data.chatId },
      data: { updatedAt: new Date() },
    });

    return message;
  }

  async getChatById(chatId: string): Promise<SupportChat | null> {
    return this.prisma.supportChat.findUnique({ where: { id: chatId } });
  }

  async deleteMessage(
    messageId: string,
    userId: string,
    isSupporter: boolean,
  ): Promise<SupportMessage> {
    const message = await this.prisma.supportMessage.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    if (!isSupporter) {
      throw new ForbiddenException('Only supporters can delete messages');
    }

    if (message.senderType !== SenderType.SUPPORTER) {
      throw new ForbiddenException('Supporters can only delete supporter messages');
    }

    return this.prisma.supportMessage.delete({ where: { id: messageId } });
  }

  async deleteChat(
    chatId: string,
    isSupporter: boolean,
  ): Promise<SupportChat> {
    if (!isSupporter) {
      throw new ForbiddenException('Only supporters can delete chats');
    }

    const chat = await this.prisma.supportChat.findUnique({
      where: { id: chatId },
    });

    if (!chat) {
      throw new NotFoundException('Chat not found');
    }

    return this.prisma.supportChat.delete({ where: { id: chatId } });
  }

  async markMessagesAsRead(
    chatId: string,
    readerRole: 'CUSTOMER' | 'SUPPORTER',
    userId?: string,
  ): Promise<{ success: boolean; count: number; chatUserId: string }> {
    const chat = await this.prisma.supportChat.findUnique({
      where: { id: chatId },
      select: { id: true, userId: true },
    });

    if (!chat) {
      throw new NotFoundException('Chat not found');
    }

    if (readerRole === 'CUSTOMER' && userId && chat.userId !== userId) {
      throw new ForbiddenException('Cannot access this chat');
    }

    const targetSenderType =
      readerRole === 'CUSTOMER' ? SenderType.SUPPORTER : SenderType.CUSTOMER;

    const result = await this.prisma.supportMessage.updateMany({
      where: {
        chatId,
        senderType: targetSenderType,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });

    return {
      success: true,
      count: result.count,
      chatUserId: chat.userId,
    };
  }
}

