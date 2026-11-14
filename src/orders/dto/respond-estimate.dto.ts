import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum EstimateAction {
  ACCEPT = 'accept',
  CANCEL = 'cancel',
}

export class RespondEstimateDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  @IsString({ message: 'action must be a string' })
  @IsNotEmpty({ message: 'action is required' })
  @IsEnum(EstimateAction, {
    message: 'action must be either "accept" or "cancel"',
  })
  action: EstimateAction;
}

