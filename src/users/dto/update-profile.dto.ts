import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';

export class UpdateProfileDto {
  @IsBoolean()
  @IsNotEmpty()
  isIndividual: boolean;

  @ValidateIf((o) => o.isIndividual === true)
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  firstName?: string;

  @ValidateIf((o) => o.isIndividual === true)
  @IsString()
  @IsNotEmpty({ message: 'Last name is required' })
  lastName?: string;

  @IsString()
  @IsNotEmpty({ message: 'Address is required' })
  address: string;

  @IsString()
  @IsNotEmpty({ message: 'Phone number is required' })
  phoneNumber: string;

  // Individual fields
  @ValidateIf((o) => o.isIndividual === true)
  @IsString()
  @IsNotEmpty({ message: 'Armenian document type is required' })
  hyDocumentType?: string;

  @ValidateIf((o) => o.isIndividual === true)
  @IsString()
  @IsNotEmpty({ message: 'English document type is required' })
  enDocumentType?: string;

  @ValidateIf((o) => o.isIndividual === true)
  @IsString()
  @IsNotEmpty({ message: 'Russian document type is required' })
  ruDocumentType?: string;

  @ValidateIf((o) => o.isIndividual === true)
  @IsString()
  @IsNotEmpty({ message: 'Document number is required' })
  documentNumber?: string;

  // Legal entity fields
  @ValidateIf((o) => o.isIndividual === false)
  @IsString()
  @IsNotEmpty({ message: 'Company name is required' })
  companyName?: string;

  @ValidateIf((o) => o.isIndividual === false)
  @IsString()
  @IsNotEmpty({ message: 'Taxpayer ID is required' })
  taxpayerId?: string;
}
