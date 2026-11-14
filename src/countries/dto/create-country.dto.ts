import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  hyName: string;

  @IsString()
  @IsNotEmpty()
  ruName: string;

  @IsString()
  @IsNotEmpty()
  enName: string;

  @IsOptional()
  flag: any;
}
