import { Injectable, Logger, NotFoundException, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { ConnectTelegramDto } from './dto/connect-telegram.dto';

@Injectable()
export class TelegramService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(TelegramService.name);
  private isPolling = false;
  private offset = 0;

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) { }

  async onModuleInit() {
    const botToken = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    if (!botToken) {
      this.logger.warn('TELEGRAM_BOT_TOKEN is not configured.');
      return;
    }

    const webhookUrl = this.configService.get<string>('TELEGRAM_WEBHOOK_URL');
    if (webhookUrl) {
      await this.setupWebhook(botToken, webhookUrl);
    } else {
      const enablePolling = this.configService.get<string>('TELEGRAM_ENABLE_POLLING') !== 'false';
      if (enablePolling) {
        this.startPolling(botToken);
      } else {
        this.logger.log('Telegram polling is disabled by configuration (TELEGRAM_ENABLE_POLLING=false).');
      }
    }
  }

  onModuleDestroy() {
    this.isPolling = false;
  }

  private async setupWebhook(botToken: string, webhookUrl: string) {
    try {
      this.logger.log(`Setting Telegram webhook to ${webhookUrl}...`);
      const res = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: webhookUrl }),
      });
      const data = await res.json();
      this.logger.log(`Set Telegram webhook result: ${JSON.stringify(data)}`);
    } catch (err) {
      this.logger.error('Failed to set Telegram webhook:', err);
    }
  }

  private async startPolling(botToken: string) {
    this.isPolling = true;
    this.logger.log('Starting Telegram long polling loop...');

    // Run polling loop asynchronously
    (async () => {
      while (this.isPolling) {
        try {
          const response = await fetch(
            `https://api.telegram.org/bot${botToken}/getUpdates?offset=${this.offset}&timeout=15`,
            {
              signal: AbortSignal.timeout(25000),
              headers: {
                Connection: 'keep-alive',
              },
            },
          );

          if (!response.ok) {
            const errorText = await response.text().catch(() => '');
            this.logger.warn(`Telegram polling returned HTTP ${response.status}: ${errorText}`);
            await new Promise((resolve) => setTimeout(resolve, 5000));
            continue;
          }

          const data = await response.json();

          if (data.ok && Array.isArray(data.result)) {
            for (const update of data.result) {
              this.offset = Math.max(this.offset, update.update_id + 1);
              await this.handleWebhook(update);
            }
          }
        } catch (err: any) {
          if (!this.isPolling) {
            break;
          }

          const errorCode = err?.cause?.code || err?.code;
          const isTransient =
            errorCode === 'ECONNRESET' ||
            errorCode === 'ETIMEDOUT' ||
            errorCode === 'ECONNREFUSED' ||
            errorCode === 'ENOTFOUND' ||
            errorCode === 'UND_ERR_SOCKET' ||
            err?.name === 'TimeoutError' ||
            (err?.message && (err.message.includes('fetch failed') || err.message.includes('timeout')));

          if (isTransient) {
            this.logger.warn(
              `Telegram polling connection reset or timed out (${errorCode || err?.message || 'unknown'}). Reconnecting in 3s...`,
            );
            await new Promise((resolve) => setTimeout(resolve, 3000));
          } else {
            this.logger.error('Error in Telegram polling loop:', err);
            await new Promise((resolve) => setTimeout(resolve, 5000));
          }
        }
      }
    })();
  }

  async connectTelegram(dto: ConnectTelegramDto) {
    const { userId, telegramChatId } = dto;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.user.update({
      where: { id: userId },
      data: { telegramChatId },
    });

    return { connected: true, telegramChatId };
  }

  async disconnectTelegram(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { telegramChatId: null },
    });

    return {
      message: 'Telegram account disconnected successfully',
    };
  }

  async getTelegramStatus(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      connected: !!user.telegramChatId,
      telegramChatId: user.telegramChatId || null,
    };
  }

  async handleWebhook(body: any) {
    this.logger.log('Received Telegram Webhook payload:', JSON.stringify(body));

    try {
      const message = body?.message;
      if (!message) {
        return { ok: true };
      }

      const chatId = message.chat?.id?.toString();
      const text: string = message.text || '';

      if (text.startsWith('/start') && chatId) {
        const parts = text.split(/\s+/);
        if (parts.length > 1) {
          const userId = parts[1].trim();

          try {
            await this.connectTelegram({ userId, telegramChatId: chatId });
            this.logger.log(`Linked Telegram chatId ${chatId} to userId ${userId}`);
            await this.sendMessage(
              chatId,
              'Your Telegram account has been successfully linked to your AmTrans account!',
            );
          } catch (err: any) {
            this.logger.warn(`Failed to connect Telegram for userId ${userId}: ${err?.message || err}`);
            await this.sendMessage(chatId, 'Failed to link account: User not found.');
          }
        } else {
          await this.sendMessage(
            chatId,
            'Welcome to AmTrans Bot! To link your Telegram account, please click the Telegram link from your profile on the AmTrans website.',
          );
        }
      }
    } catch (error) {
      this.logger.error('Error handling Telegram webhook:', error);
    }

    return { ok: true };
  }

  async sendMessage(chatId: string, text: string, options?: { parse_mode?: string }) {
    const botToken = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    if (!botToken) return;

    try {
      const payload: Record<string, any> = { chat_id: chatId, text };
      if (options?.parse_mode) {
        payload.parse_mode = options.parse_mode;
      }
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        this.logger.error(`Telegram API error: ${response.status} ${response.statusText}`, errData);
      }
    } catch (err) {
      this.logger.error('Failed to send Telegram message:', err);
    }
  }
}
