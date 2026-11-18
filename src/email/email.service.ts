import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  getRegistrationEmailTemplate,
  getOrderReviewEmailTemplate,
  getContactEmailTemplate,
  getOrderNotificationEmailTemplate,
  getEstimateSubmittedEmailTemplate,
  getEstimateAcceptedEmailTemplate,
  getEstimateCancelledEmailTemplate,
  getCustomerStatusUpdateEmailTemplate,
  SupportedLanguage,
} from './email.templates';

interface ResendAttachment {
  filename: string;
  path?: string;
  content?: string;
}

interface ResendEmailOptions {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string | string[];
  headers?: Record<string, string>;
  attachments?: ResendAttachment[];
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('RESEND_API_KEY')?.trim();
    if (!apiKey) {
      this.logger.warn(
        'RESEND_API_KEY is not configured in environment variables. Email delivery via Resend requires a valid API key.',
      );
    }
  }

  private getFromEmail(defaultName = 'AmTrans Express'): string {
    const configuredFrom =
      this.configService.get<string>('RESEND_FROM_EMAIL')?.trim() ||
      this.configService.get<string>('EMAIL_FROM')?.trim();

    if (configuredFrom) {
      if (configuredFrom.includes('<') && configuredFrom.includes('>')) {
        return configuredFrom;
      }
      return `${defaultName} <${configuredFrom}>`;
    }

    return `${defaultName} <onboarding@resend.dev>`;
  }

  private getReplyToEmail(): string | undefined {
    const replyTo =
      this.configService.get<string>('CONTACT_EMAIL')?.trim();
    return replyTo || undefined;
  }

  private async sendResendEmail(options: ResendEmailOptions): Promise<void> {
    const apiKey = this.configService.get<string>('RESEND_API_KEY')?.trim();
    if (!apiKey) {
      this.logger.error('RESEND_API_KEY is not configured in environment variables.');
      throw new Error('Email service configuration missing (RESEND_API_KEY).');
    }

    const payload: Record<string, any> = {
      from: options.from,
      to: Array.isArray(options.to) ? options.to : [options.to],
      subject: options.subject,
      html: options.html,
    };

    if (options.text) {
      payload.text = options.text;
    }

    if (options.replyTo) {
      payload.reply_to = Array.isArray(options.replyTo) ? options.replyTo : [options.replyTo];
    }

    if (options.headers && Object.keys(options.headers).length > 0) {
      payload.headers = options.headers;
    }

    if (options.attachments && options.attachments.length > 0) {
      payload.attachments = options.attachments;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      let errorMessage = errorBody;
      try {
        const parsed = JSON.parse(errorBody);
        errorMessage = parsed.message || errorBody;
      } catch {
        // use raw text
      }
      throw new Error(`Resend API error (${response.status}): ${errorMessage}`);
    }
  }

  async sendRegistrationConfirmation(
    email: string,
    userId: string,
    language: SupportedLanguage,
  ): Promise<void> {
    const rawFrontendUrl = this.configService.get<string>('FRONTEND_URL') || 'https://www.amtrans.am/';
    const frontendUrl = rawFrontendUrl.trim().replace(/\/+$/, '');

    const encodedEmail = encodeURIComponent(email.trim());
    const encodedCode = encodeURIComponent(userId);
    const verifyUrl = `${frontendUrl}/auth/verify?email=${encodedEmail}&code=${encodedCode}`;

    const template = getRegistrationEmailTemplate(language, verifyUrl);

    try {
      await this.sendResendEmail({
        from: this.getFromEmail('AmTrans Express'),
        to: email.trim(),
        replyTo: this.getReplyToEmail(),
        subject: template.subject,
        html: template.html,
        headers: {
          'Auto-Submitted': 'auto-generated',
          'X-Auto-Response-Suppress': 'All',
        },
      });
      this.logger.log(`Registration confirmation email sent to ${email} (${language})`);
    } catch (error) {
      this.logger.error(`Failed to send registration confirmation email to ${email}:`, error);
      throw new InternalServerErrorException('Failed to send verification email. Please try again later.');
    }
  }

  async sendOrderReviewNotification(
    email: string,
    orderId: string,
    qrCodeUrl?: string | null,
  ): Promise<void> {
    const rawFrontendUrl = this.configService.get<string>('FRONTEND_URL') || 'https://www.amtrans.am/';
    const cleanFrontendUrl = rawFrontendUrl.trim().replace(/\/+$/, '');
    const pageLink = `${cleanFrontendUrl}/dashboard/manage-orders/${orderId}`;

    const cleanQrUrl = qrCodeUrl ? qrCodeUrl.trim() : null;
    const template = getOrderReviewEmailTemplate(orderId, pageLink, Boolean(cleanQrUrl));

    const attachments: ResendAttachment[] = [];
    if (cleanQrUrl) {
      attachments.push({
        filename: `order-${orderId}-qrcode.png`,
        path: cleanQrUrl,
      });
    }

    try {
      await this.sendResendEmail({
        from: this.getFromEmail('AmTrans Express'),
        to: email.trim(),
        subject: template.subject,
        html: template.html,
        text: template.text,
        attachments: attachments.length > 0 ? attachments : undefined,
      });
      this.logger.log(`Order review notification email sent to ${email} for order ${orderId}`);
    } catch (error: any) {
      this.logger.error(
        `Failed to send order review notification email to ${email} for order ${orderId}: ${error?.message || error}`,
        error?.stack,
      );
      // Email failures must not roll back the created order
      return;
    }
  }

  async sendContactMessage(params: {
    name: string;
    email: string;
    message: string;
    submittedAt?: Date;
  }): Promise<void> {
    const rawRecipientEmail =
      this.configService.get<string>('CONTACT_EMAIL');
    const recipientEmail = rawRecipientEmail ? rawRecipientEmail.trim() : '';

    if (!recipientEmail) {
      this.logger.error('No recipient email configured for Contact Us (CONTACT_EMAIL is missing).');
      throw new InternalServerErrorException('Contact email service is temporarily unavailable.');
    }

    const submittedDate = params.submittedAt || new Date();
    const template = getContactEmailTemplate({
      name: params.name,
      email: params.email,
      message: params.message,
      submittedAt: submittedDate,
    });

    try {
      await this.sendResendEmail({
        from: this.getFromEmail('AmTrans Contact'),
        to: recipientEmail,
        replyTo: params.email.trim(),
        subject: template.subject,
        html: template.html,
        text: template.text,
      });
      this.logger.log(`Contact message from "${params.name}" <${params.email}> delivered to <${recipientEmail}>`);
    } catch (error: any) {
      this.logger.error(
        `Failed to send contact email from ${params.email} to ${recipientEmail}: ${error?.message || error}`,
        error?.stack,
      );
      throw new InternalServerErrorException('Failed to send contact message. Please try again later.');
    }
  }

  async sendOrderNotificationEmail(
    email: string,
    subject: string,
    html: string,
    text?: string,
    trackingNumber?: string,
  ): Promise<void> {
    const headers: Record<string, string> = {
      'Auto-Submitted': 'auto-generated',
      'X-Auto-Response-Suppress': 'All',
      'X-Mailer': 'AmTrans Transactional Engine',
      'X-Entity-Ref-Type': 'order',
    };

    if (trackingNumber) {
      headers['X-Entity-Ref-ID'] = trackingNumber;
    }

    try {
      await this.sendResendEmail({
        from: this.getFromEmail('AmTrans Express'),
        to: email.trim(),
        replyTo: this.getReplyToEmail(),
        subject,
        html,
        text,
        headers,
      });
      this.logger.log(`Order notification email sent to ${email} (Subject: "${subject}")`);
    } catch (error: any) {
      this.logger.error(
        `Failed to send order notification email to ${email} (Subject: "${subject}"): ${error?.message || error}`,
        error?.stack,
      );
      // Email failures must not throw or roll back order operations
      return;
    }
  }

  /**
   * Dispatches a localized order status update notification email to the customer.
   */
  async sendUserOrderStatusUpdateNotification(
    email: string,
    status: string,
    params: {
      trackingNumber: string;
      orderUrl: string;
      language?: string;
    },
  ): Promise<void> {
    if (!email || !email.trim()) {
      this.logger.warn(
        `Skipping status update email for order ${params.trackingNumber} (${status}): recipient email is empty`,
      );
      return;
    }

    const template = getCustomerStatusUpdateEmailTemplate(status, params);
    if (!template) {
      this.logger.log(
        `No status update email template for status "${status}". Email skipped for ${email}.`,
      );
      return;
    }

    await this.sendOrderNotificationEmail(
      email.trim(),
      template.subject,
      template.html,
      template.text,
      params.trackingNumber,
    );
  }

  /**
   * Dispatches an estimate submission notification email to the customer.
   */
  async sendUserEstimateNotification(
    email: string,
    params: {
      trackingNumber: string;
      estimatedPrice: number | string;
      orderUrl: string;
      language?: string;
    },
  ): Promise<void> {
    if (!email || !email.trim()) {
      this.logger.warn(
        `Skipping estimate notification email for order ${params.trackingNumber}: recipient email is empty`,
      );
      return;
    }

    const template = getEstimateSubmittedEmailTemplate(params);
    await this.sendOrderNotificationEmail(
      email.trim(),
      template.subject,
      template.html,
      template.text,
      params.trackingNumber,
    );
  }

  /**
   * Dispatches an order review / creation notification email to the operator(s).
   */
  async sendOperatorOrderNotification(
    email: string,
    status: string,
    params: {
      trackingNumber: string;
      fromOffice: string;
      orderUrl: string;
      language?: string;
    },
  ): Promise<void> {
    if (!email || !email.trim()) {
      this.logger.warn(
        `Skipping operator notification email for order ${params.trackingNumber}: recipient email is empty`,
      );
      return;
    }

    const template = getOrderNotificationEmailTemplate(status, params);
    if (!template) {
      return;
    }

    await this.sendOrderNotificationEmail(
      email.trim(),
      template.subject,
      template.html,
      template.text,
      params.trackingNumber,
    );
  }

  /**
   * Dispatches an estimate decision notification email to the operator(s).
   */
  async sendOperatorEstimateDecisionNotification(
    email: string,
    decision: 'accept' | 'cancel',
    params: {
      trackingNumber: string;
      estimatedPrice: number | string;
      orderUrl: string;
      language?: string;
    },
  ): Promise<void> {
    if (!email || !email.trim()) {
      this.logger.warn(
        `Skipping operator estimate decision email for order ${params.trackingNumber}: recipient email is empty`,
      );
      return;
    }

    const template =
      decision === 'accept'
        ? getEstimateAcceptedEmailTemplate(params)
        : getEstimateCancelledEmailTemplate(params);

    await this.sendOrderNotificationEmail(
      email.trim(),
      template.subject,
      template.html,
      template.text,
      params.trackingNumber,
    );
  }
}
