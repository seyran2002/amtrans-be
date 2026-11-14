import { IsNotEmpty, IsString } from 'class-validator';

export class MarkMessagesReadDto {
  @IsString()
  @IsNotEmpty()
  chatId: string;
}

