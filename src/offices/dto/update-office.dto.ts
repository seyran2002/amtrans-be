import { IsOptional, IsString } from 'class-validator';

export class UpdateOfficeDto {
  @IsOptional()
  @IsString()
  countryId?: string;

  @IsOptional()
  @IsString()
  province?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsString()
  fullAddress?: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
