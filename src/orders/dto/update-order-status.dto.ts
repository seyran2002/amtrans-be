import { IsEnum, IsNotEmpty } from 'class-validator';
import { OrderStatus } from '../../../generated/prisma';

export class UpdateOrderStatusDto {
  @IsEnum(OrderStatus, {
    message: 'status must be a valid OrderStatus enum value',
  })
  @IsNotEmpty({ message: 'status is required' })
  status: OrderStatus;
}
