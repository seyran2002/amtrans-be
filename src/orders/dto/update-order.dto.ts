import { Type, Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsString,
  Min,
} from 'class-validator';
import { Currency, OrderStatus } from '../../../generated/prisma';

export class UpdateOrderDto {
  @IsOptional()
  @IsString({ message: 'fromOfficeId must be a string' })
  @IsNotEmpty({ message: 'fromOfficeId cannot be empty' })
  fromOfficeId?: string;

  @IsOptional()
  @IsString({ message: 'toOfficeId must be a string' })
  @IsNotEmpty({ message: 'toOfficeId cannot be empty' })
  toOfficeId?: string;

  @IsOptional()
  @IsString({ message: 'receiverId must be a string' })
  receiverId?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'pieceCount must be a valid number' })
  @Min(1, { message: 'pieceCount must be at least 1' })
  pieceCount?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'productPrice must be a valid number' })
  @Min(0, { message: 'productPrice must be non-negative' })
  productPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'price must be a valid number' })
  @Min(0, { message: 'price must be non-negative' })
  price?: number;

  @IsOptional()
  @IsEnum(Currency, {
    message: 'currency must be a valid Currency enum (USD, AED, EUR, RUB, AMD)',
  })
  currency?: Currency;

  @IsOptional()
  @IsString({ message: 'marketName must be a string' })
  @IsNotEmpty({ message: 'marketName cannot be empty' })
  marketName?: string;

  @IsOptional()
  @IsString({ message: 'productDescription must be a string' })
  @IsNotEmpty({ message: 'productDescription cannot be empty' })
  productDescription?: string;

  @IsOptional()
  @IsString({ message: 'comment must be a string' })
  comment?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'weight must be a valid number' })
  @Min(0, { message: 'weight must be non-negative' })
  weight?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'length must be a valid number' })
  @Min(0, { message: 'length must be non-negative' })
  length?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'width must be a valid number' })
  @Min(0, { message: 'width must be non-negative' })
  width?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'height must be a valid number' })
  @Min(0, { message: 'height must be non-negative' })
  height?: number;

  @IsOptional()
  @IsString({ message: 'invoiceUrl must be a string' })
  invoiceUrl?: string;

  @IsOptional()
  @IsEnum(OrderStatus, {
    message: 'status must be a valid OrderStatus enum value',
  })
  status?: OrderStatus;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return value;
  })
  @IsBoolean({ message: 'isNew must be a boolean' })
  isNew?: boolean;

  @IsOptional()
  @IsString({ message: 'tnVedCode must be a string' })
  tnVedCode?: string;

  // Optional form-data field to prevent forbidNonWhitelisted validation errors
  @IsOptional()
  invoice?: any;
}
