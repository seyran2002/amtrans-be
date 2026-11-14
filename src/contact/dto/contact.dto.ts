import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class ContactDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MaxLength(100, { message: 'Name cannot exceed 100 characters' })
  name: string;

  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  @MaxLength(150, { message: 'Email cannot exceed 150 characters' })
  email: string;

  @IsString({ message: 'Message must be a string' })
  @IsNotEmpty({ message: 'Message is required' })
  @MinLength(5, { message: 'Message must be at least 5 characters long' })
  @MaxLength(5000, { message: 'Message cannot exceed 5000 characters' })
  message: string;

  /**
   * Anti-bot honeypot field.
   * Legitimate users will not fill this field. If present and non-empty, submission is discarded as spam.
   */
  @IsOptional()
  @IsString()
  @MaxLength(100)
  _hp?: string;
}
