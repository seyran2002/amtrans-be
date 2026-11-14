import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SupportChatService } from './support-chat.service';
import { SupportChatGateway } from './support-chat.gateway';
import { GetMessagesDto } from './dto/get-messages.dto';
import { MarkMessagesReadDto } from './dto/mark-messages-read.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserFromJwt } from '../auth/jwt.strategy';
import { Role } from '../../generated/prisma';

@Controller('support-chat')
@UseGuards(JwtAuthGuard)
export class SupportChatController {
  constructor(
    private readonly supportChatService: SupportChatService,
    private readonly supportChatGateway: SupportChatGateway,
  ) {}

  @Get('active-chat')
  async getActiveChat(@Request() req: { user: UserFromJwt }) {
    return this.supportChatService.getOrCreateChat(req.user.id);
  }

  @Get('admin/chats')
  async getAdminChats() {
    return this.supportChatService.getAdminChats();
  }

  @Get('messages')
  async getMessages(@Query() dto: GetMessagesDto) {
    return this.supportChatService.getMessages(dto);
  }

  @Patch('messages/read')
  @HttpCode(HttpStatus.OK)
  async markMessagesAsRead(
    @Request() req: { user: UserFromJwt },
    @Body() dto: MarkMessagesReadDto,
  ) {
    const isSupporter = Boolean(
      req.user.isSupporter ||
      req.user.role === Role.ADMIN ||
      req.user.role === Role.OPERATOR,
    );
    const readerRole: 'CUSTOMER' | 'SUPPORTER' = isSupporter
      ? 'SUPPORTER'
      : 'CUSTOMER';

    const result = await this.supportChatService.markMessagesAsRead(
      dto.chatId,
      readerRole,
      readerRole === 'CUSTOMER' ? req.user.id : undefined,
    );

    return {
      success: result.success,
      count: result.count,
    };
  }

  @Delete('messages/:id')
  @HttpCode(HttpStatus.OK)
  async deleteMessage(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
  ) {
    const isSupporter = Boolean(
      req.user.isSupporter ||
      req.user.role === Role.ADMIN ||
      req.user.role === Role.OPERATOR,
    );

    const message = await this.supportChatService.deleteMessage(id, req.user.id, isSupporter);

    // Resolve the customer's userId so we can target their socket room (customer_${userId})
    const chat = await this.supportChatService.getChatById(message.chatId);

    this.supportChatGateway.server
      .to(`customer_${chat?.userId}`)
      .to('supporters_room')
      .emit('message:deleted', { messageId: message.id, chatId: message.chatId });

    return { success: true, messageId: message.id, chatId: message.chatId };
  }

  @Delete(':chatId')
  @HttpCode(HttpStatus.OK)
  async deleteChat(
    @Request() req: { user: UserFromJwt },
    @Param('chatId') chatId: string,
  ) {
    const isSupporter = Boolean(
      req.user.isSupporter
    );

    const chat = await this.supportChatService.deleteChat(chatId, isSupporter);

    this.supportChatGateway.server
      .to(`customer_${chat.userId}`)
      .to('supporters_room')
      .emit('chat:deleted', { chatId: chat.id });

    return { success: true, chatId: chat.id };
  }
}

