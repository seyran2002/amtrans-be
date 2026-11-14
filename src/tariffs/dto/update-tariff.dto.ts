import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateTariffDto {
  @IsOptional()
  @IsString({ message: 'fromOfficeId must be a string' })
  fromOfficeId?: string;

  @IsOptional()
  @IsString({ message: 'toOfficeId must be a string' })
  toOfficeId?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'pricePerKg must be a valid number' })
  @Min(0, { message: 'pricePerKg must be non-negative' })
  pricePerKg?: number;
}
