import { Injectable, Logger } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { ContactDto } from './dto/contact.dto';

export interface ContactResponse {
  success: boolean;
  message: string;
}

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly emailService: EmailService) {}

  async handleContactSubmission(
    dto: ContactDto,
    clientIp?: string,
  ): Promise<ContactResponse> {
    // 1. Anti-bot honeypot protection:
    // If the hidden '_hp' field contains any value, a bot filled it out.
    // Silently succeed without sending an email or wasting SMTP quotas.
    if (dto._hp && dto._hp.trim().length > 0) {
      this.logger.warn(
        `Spam bot honeypot triggered on contact form from IP ${clientIp || 'unknown'}. Discarding message.`,
      );
      return {
        success: true,
        message: 'Your message has been received.',
      };
    }

    // 2. Sanitize and trim values
    const cleanName = dto.name.trim();
    const cleanEmail = dto.email.trim();
    const cleanMessage = dto.message.trim();

    this.logger.log(
      `Processing contact request from "${cleanName}" <${cleanEmail}> (IP: ${clientIp || 'unknown'})`,
    );

    // 3. Dispatch contact email to company inbox with customer replyTo
    await this.emailService.sendContactMessage({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
      submittedAt: new Date(),
    });

    return {
      success: true,
      message: 'Your message has been sent successfully. We will get back to you shortly.',
    };
  }
}
