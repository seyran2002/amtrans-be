import { IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from '../../../generated/prisma';

export class UpdateUserRoleDto {
  @IsEnum(Role, { message: 'Role must be a valid Role enum value (CUSTOMER, OPERATOR, ADMIN)' })
  @IsNotEmpty({ message: 'Role is required' })
  role: Role;
}
