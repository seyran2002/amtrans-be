import { IsEmail, IsIn, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { SupportedLanguage } from '../../email/email.templates';

export class RegisterDto {
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim().toLowerCase() : value))
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsIn(['en', 'ru', 'hy'], { message: 'Language must be one of: en, ru, hy' })
  @IsNotEmpty({ message: 'Language is required' })
  language: SupportedLanguage;
}
