import { IsOptional, IsString } from 'class-validator';

export class UpdateReceiverDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  hyDocumentType?: string;

  @IsOptional()
  @IsString()
  enDocumentType?: string;

  @IsOptional()
  @IsString()
  ruDocumentType?: string;

  @IsOptional()
  @IsString()
  documentNumber?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}
