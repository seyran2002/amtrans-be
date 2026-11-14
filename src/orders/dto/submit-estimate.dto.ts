import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class SubmitEstimateDto {
  @Transform(({ obj, value }) => {
    const val = value ?? obj?.price ?? obj?.estimatedShippingPrice;
    return val !== undefined && val !== null ? Number(val) : val;
  })
  @Type(() => Number)
  @IsNumber({}, { message: 'estimatedPrice must be a valid number' })
  @Min(0.01, { message: 'estimatedPrice must be a positive amount in AMD' })
  @IsNotEmpty({ message: 'estimatedPrice is required' })
  estimatedPrice: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'price must be a valid number' })
  price?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'estimatedShippingPrice must be a valid number' })
  estimatedShippingPrice?: number;
}
