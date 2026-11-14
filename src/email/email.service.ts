import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
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

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    const rawHost = this.configService.get<string>('EMAIL_HOST') || this.configService.get<string>('SMTP_HOST') || 'smtp.gmail.com';
    const smtpHost = rawHost.trim();

    const rawPort = this.configService.get<string>('EMAIL_PORT') || this.configService.get<string>('SMTP_PORT') || '587';
    const smtpPort = parseInt(rawPort.toString().trim(), 10);

    const rawUser = this.configService.get<string>('EMAIL_USER') || this.configService.get<string>('SMTP_USER') || this.configService.get<string>('EMAIL');
    const smtpUser = rawUser ? rawUser.trim() : undefined;

    const rawPass = this.configService.get<string>('EMAIL_PASSWORD') || this.configService.get<string>('SMTP_PASS') || this.configService.get<string>('EMAIL_PASS');
    const smtpPass = rawPass ? rawPass.trim().replace(/\s+/g, '') : undefined;

    const isGmail = smtpHost.toLowerCase().includes('gmail.com');
    if (isGmail) {
      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
      });
    } else {
      this.transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
      });
    }
  }

  async sendRegistrationConfirmation(
    email: string,
    userId: string,
    language: SupportedLanguage,
  ): Promise<void> {
    const rawSenderEmail = this.configService.get<string>('EMAIL_USER') || this.configService.get<string>('EMAIL') || '';
    const senderEmail = rawSenderEmail.trim();
    const rawFrontendUrl = this.configService.get<string>('FRONTEND_URL') || 'https://www.amtrans.am/';
    const frontendUrl = rawFrontendUrl.trim().replace(/\/+$/, '');

    const encodedEmail = encodeURIComponent(email.trim());
    const encodedCode = encodeURIComponent(userId);
    const verifyUrl = `${frontendUrl}/auth/verify?email=${encodedEmail}&code=${encodedCode}`;

    const template = getRegistrationEmailTemplate(language, verifyUrl);

    try {
      await this.transporter.sendMail({
        from: senderEmail ? `"AmTrans Express" <${senderEmail}>` : undefined,
        to: email.trim(),
        replyTo: senderEmail,
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
    const rawSenderEmail = this.configService.get<string>('EMAIL_USER') || this.configService.get<string>('EMAIL') || '';
    const senderEmail = rawSenderEmail.trim();
    const rawFrontendUrl = this.configService.get<string>('FRONTEND_URL') || 'https://www.amtrans.am/';
    const cleanFrontendUrl = rawFrontendUrl.trim().replace(/\/+$/, '');
    const pageLink = `${cleanFrontendUrl}/dashboard/manage-orders/${orderId}`;

    const cleanQrUrl = qrCodeUrl ? qrCodeUrl.trim() : null;
    const template = getOrderReviewEmailTemplate(orderId, pageLink, Boolean(cleanQrUrl));

    const attachments: nodemailer.Attachment[] = [];
    if (cleanQrUrl) {
      attachments.push({
        filename: `order-${orderId}-qrcode.png`,
        path: cleanQrUrl,
        cid: 'order-qrcode',
      });
    }

    try {
      await this.transporter.sendMail({
        from: senderEmail,
        to: email.trim(),
        subject: template.subject,
        html: template.html,
        text: template.text,
        attachments,
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
    const rawSenderEmail =
      this.configService.get<string>('EMAIL_USER') ||
      this.configService.get<string>('EMAIL') ||
      '';
    const senderEmail = rawSenderEmail.trim();

    const rawRecipientEmail =
      this.configService.get<string>('CONTACT_EMAIL') ||
      this.configService.get<string>('EMAIL_USER') ||
      senderEmail;
    const recipientEmail = rawRecipientEmail.trim();

    if (!recipientEmail) {
      this.logger.error('No recipient email configured for Contact Us (EMAIL_USER or CONTACT_EMAIL is missing).');
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
      await this.transporter.sendMail({
        from: senderEmail ? `"AmTrans Contact" <${senderEmail}>` : undefined,
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
    const rawSenderEmail =
      this.configService.get<string>('EMAIL_USER') ||
      this.configService.get<string>('EMAIL') ||
      '';
    const senderEmail = rawSenderEmail.trim();

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
      await this.transporter.sendMail({
        from: senderEmail ? `"AmTrans Express" <${senderEmail}>` : undefined,
        to: email.trim(),
        replyTo: senderEmail,
        subject,
        html,
        text,
        headers,
      });
      this.logger.log(`Order notification email sent to ${email} (Subject: "${subject}")`);
    } catch (error: any) {
      const isBadCredentials =
        error?.responseCode === 535 ||
        error?.message?.includes('535') ||
        error?.message?.includes('BadCredentials');

      if (isBadCredentials) {
        this.logger.error(
          `SMTP Authentication Failed for ${email} (Subject: "${subject}"): Invalid login: 535-5.7.8 BadCredentials. ` +
          `Please verify that EMAIL_USER ("${senderEmail}") has 2-Step Verification enabled and that EMAIL_PASSWORD in .env ` +
          `is an active 16-character Google App Password (generate at https://myaccount.google.com/apppasswords).`,
        );
      } else {
        this.logger.error(
          `Failed to send order notification email to ${email} (Subject: "${subject}"): ${error?.message || error}`,
          error?.stack,
        );
      }
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
