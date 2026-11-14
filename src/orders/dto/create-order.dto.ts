import { Type, Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  IsBoolean,
} from 'class-validator';
import { Currency } from '../../../generated/prisma';

export class CreateOrderDto {
  @IsString({ message: 'fromOfficeId must be a string' })
  @IsNotEmpty({ message: 'fromOfficeId is required' })
  fromOfficeId: string;

  @IsString({ message: 'toOfficeId must be a string' })
  @IsNotEmpty({ message: 'toOfficeId is required' })
  toOfficeId: string;

  @IsOptional()
  @IsString({ message: 'receiverId must be a string' })
  receiverId?: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'pieceCount must be a valid number' })
  @Min(1, { message: 'pieceCount must be at least 1' })
  pieceCount: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'productPrice must be a valid number' })
  @Min(0, { message: 'productPrice must be non-negative' })
  productPrice: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'price must be a valid number' })
  @Min(0, { message: 'price must be non-negative' })
  price?: number;

  @IsEnum(Currency, {
    message: 'currency must be a valid Currency enum (USD, AED, EUR, RUB, AMD)',
  })
  @IsNotEmpty({ message: 'currency is required' })
  currency: Currency;

  @IsString({ message: 'marketName must be a string' })
  @IsNotEmpty({ message: 'marketName is required' })
  marketName: string;

  @IsString({ message: 'productDescription must be a string' })
  @IsNotEmpty({ message: 'productDescription is required' })
  productDescription: string;

  @IsOptional()
  @IsString({ message: 'comment must be a string' })
  comment?: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return value;
  })
  @IsBoolean({ message: 'isNew must be a boolean' })
  isNew?: boolean;

  @Type(() => Number)
  @IsNumber({}, { message: 'weight must be a valid number' })
  @Min(0, { message: 'weight must be non-negative' })
  weight: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'length must be a valid number' })
  @Min(0, { message: 'length must be non-negative' })
  length: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'width must be a valid number' })
  @Min(0, { message: 'width must be non-negative' })
  width: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'height must be a valid number' })
  @Min(0, { message: 'height must be non-negative' })
  height: number;

  // Optional form-data field to prevent forbidNonWhitelisted validation errors
  @IsOptional()
  invoice?: any;
}
