import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Request, UseGuards } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { ConnectTelegramDto } from './dto/connect-telegram.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) { }

  @Post('connect')
  @HttpCode(HttpStatus.OK)
  async connect(@Body() dto: ConnectTelegramDto) {
    return this.telegramService.connectTelegram(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('disconnect')
  @HttpCode(HttpStatus.OK)
  async disconnect(@Request() req: { user: { id: string } }) {
    return this.telegramService.disconnectTelegram(req.user.id);
  }

  @Get('status/:userId')
  async getStatus(@Param('userId') userId: string) {
    return this.telegramService.getTelegramStatus(userId);
  }

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  async webhook(@Body() body: any) {
    return this.telegramService.handleWebhook(body);
  }
}

