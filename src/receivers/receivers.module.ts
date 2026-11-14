import { Module } from '@nestjs/common';
import { ReceiversController } from './receivers.controller';
import { ReceiversService } from './receivers.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule],
  controllers: [ReceiversController],
  providers: [ReceiversService],
  exports: [ReceiversService],
})
export class ReceiversModule {}
