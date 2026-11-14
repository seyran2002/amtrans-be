import { IsInt, IsOptional, Min } from 'class-validator';

export class UpdateSystemSettingsDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  volumetricDivisor?: number;
}
