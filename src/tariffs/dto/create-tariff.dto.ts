import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateTariffDto {
  @IsString({ message: 'fromOfficeId must be a string' })
  @IsNotEmpty({ message: 'fromOfficeId is required' })
  fromOfficeId: string;

  @IsString({ message: 'toOfficeId must be a string' })
  @IsNotEmpty({ message: 'toOfficeId is required' })
  toOfficeId: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'pricePerKg must be a valid number' })
  @Min(0, { message: 'pricePerKg must be non-negative' })
  pricePerKg: number;
}
