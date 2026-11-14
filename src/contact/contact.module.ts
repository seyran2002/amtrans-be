import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactRateLimitGuard } from './contact-rate-limit.guard';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [ContactController],
  providers: [ContactService, ContactRateLimitGuard],
  exports: [ContactService],
})
export class ContactModule {}
