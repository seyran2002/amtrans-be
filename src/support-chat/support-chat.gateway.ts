import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../prisma/prisma.service';
import { SupportChatService } from './support-chat.service';
import { validateWsClient, ValidatedWsUser } from './ws-jwt.guard';

@WebSocketGateway({ cors: { origin: '*' }, namespace: 'support-chat' })
export class SupportChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(SupportChatGateway.name);

  @WebSocketServer()
  server: Server;

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly supportChatService: SupportChatService,
  ) {}

  async handleConnection(client: Socket): Promise<void> {
    try {
      const user = await validateWsClient(client, this.jwtService, this.prisma);
      client.data = client.data || {};
      client.data.user = user;

      if (!user.isSupporter) {
        await client.join(`customer_${user.id}`);
        this.logger.log(`Customer ${user.id} joined room customer_${user.id}`);
      } else {
        await client.join('supporters_room');
        this.logger.log(`Supporter ${user.id} joined room supporters_room`);
      }
    } catch (error: any) {
      this.logger.warn(`WS connection rejected for client ${client.id}: ${error?.message || error}`);
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket): void {
    const user: ValidatedWsUser | undefined = client.data?.user;
    if (user) {
      this.logger.log(`Client ${client.id} disconnected (User: ${user.id})`);
    } else {
      this.logger.log(`Client ${client.id} disconnected`);
    }
  }

  @SubscribeMessage('send_customer_message')
  async handleCustomerMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { text: string },
  ) {
    const user: ValidatedWsUser | undefined = client.data?.user;
    if (!user) {
      client.disconnect();
      return;
    }

    if (user.isSupporter) {
      return { error: 'Supporters cannot send customer messages' };
    }

    if (!payload?.text || typeof payload.text !== 'string' || !payload.text.trim()) {
      return { error: 'Message text is required' };
    }

    const chat = await this.supportChatService.getOrCreateChat(user.id);

    const savedMessage = await this.supportChatService.saveMessage({
      chatId: chat.id,
      senderId: user.id,
      senderType: 'CUSTOMER',
      text: payload.text.trim(),
    });

    const eventPayload = {
      ...savedMessage,
      customerId: user.id,
    };

    // Emit to supporters_room broadcast channel so all online operators see it live
    this.server.to('supporters_room').emit('new_customer_message', eventPayload);

    // Acknowledge back to sender with saved message object
    return savedMessage;
  }

  @SubscribeMessage('send_supporter_reply')
  async handleSupporterReply(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { customerId: string; text: string },
  ) {
    const user: ValidatedWsUser | undefined = client.data?.user;
    if (!user) {
      client.disconnect();
      return;
    }

    if (!user.isSupporter) {
      return { error: 'Only supporters can send supporter replies' };
    }

    if (!payload?.customerId || typeof payload.customerId !== 'string') {
      return { error: 'customerId is required' };
    }

    if (!payload?.text || typeof payload.text !== 'string' || !payload.text.trim()) {
      return { error: 'Message text is required' };
    }

    const chat = await this.supportChatService.getOrCreateChat(payload.customerId);

    const savedMessage = await this.supportChatService.saveMessage({
      chatId: chat.id,
      senderId: user.id,
      senderType: 'SUPPORTER',
      text: payload.text.trim(),
    });

    const eventPayload = {
      ...savedMessage,
      customerId: payload.customerId,
    };

    // Emit directly to target room customer_${customerId}
    this.server.to(`customer_${payload.customerId}`).emit('new_supporter_reply', eventPayload);

    // Emit to supporters_room to sync all active operators
    this.server.to('supporters_room').emit('supporter_replied', eventPayload);

    return savedMessage;
  }

  @SubscribeMessage('mark_messages_read')
  async handleMarkMessagesRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { chatId: string },
  ) {
    const user: ValidatedWsUser | undefined = client.data?.user;
    if (!user) {
      client.disconnect();
      return;
    }

    if (!payload?.chatId || typeof payload.chatId !== 'string') {
      return { error: 'chatId is required' };
    }

    const readerRole: 'CUSTOMER' | 'SUPPORTER' = user.isSupporter
      ? 'SUPPORTER'
      : 'CUSTOMER';

    try {
      const result = await this.supportChatService.markMessagesAsRead(
        payload.chatId,
        readerRole,
        readerRole === 'CUSTOMER' ? user.id : undefined,
      );

      const eventPayload = {
        chatId: payload.chatId,
        readerRole,
      };

      this.server
        .to(`customer_${result.chatUserId}`)
        .to('supporters_room')
        .to(payload.chatId)
        .emit('messages_read', eventPayload);

      return {
        success: true,
        count: result.count,
        chatId: payload.chatId,
        readerRole,
      };
    } catch (error: any) {
      this.logger.error(
        `Failed to mark messages as read for chat ${payload.chatId}: ${error?.message || error}`,
      );
      return { error: error?.message || 'Failed to mark messages as read' };
    }
  }
}

