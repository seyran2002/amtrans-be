import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateSupporterDto {
  @IsBoolean({ message: 'isSupporter must be a boolean' })
  @IsNotEmpty({ message: 'isSupporter is required' })
  isSupporter: boolean;
}

