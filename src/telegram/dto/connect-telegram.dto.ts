import { IsNotEmpty, IsString } from 'class-validator';

export class ConnectTelegramDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  telegramChatId: string;
}
