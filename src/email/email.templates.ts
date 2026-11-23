import { OrderStatus } from '../../generated/prisma';
import {
  TelegramEstimateNotificationParams,
  TelegramCustomerStatusNotificationParams,
  getEstimateSubmittedTelegramTemplate,
  getCustomerStatusUpdateTelegramTemplate,
} from '../telegram/telegram.template';

export enum SupportedLanguage {
  EN = 'en',
  RU = 'ru',
  HY = 'hy',
}

export interface EmailTemplateContent {
  subject: string;
  html: string;
  text?: string;
}

export function getRegistrationEmailTemplate(
  language: SupportedLanguage | 'en' | 'ru' | 'hy',
  verifyUrl: string,
): EmailTemplateContent {
  const templates: Record<string, EmailTemplateContent> = {
    en: {
      subject: 'Confirm your registration - AMTRANS',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
            .container { max-width: 600px; background: #ffffff; margin: 0 auto; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .header { text-align: center; border-bottom: 1px solid #eef2f5; padding-bottom: 20px; margin-bottom: 20px; }
            .header h1 { color: #1e293b; margin: 0; font-size: 24px; }
            .content { color: #475569; font-size: 16px; line-height: 1.6; }
            .btn-wrapper { text-align: center; margin: 30px 0; }
            .btn { background-color: #2563eb; color: #ffffff !important; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; }
            .footer { font-size: 13px; color: #94a3b8; border-top: 1px solid #eef2f5; padding-top: 20px; margin-top: 30px; word-break: break-all; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to AMTRANS</h1>
            </div>
            <div class="content">
              <p>Thank you for creating an account with AMTRANS.</p>
              <p>To complete your registration and verify your email address, please click the button below:</p>
              <div class="btn-wrapper">
                <a href="${verifyUrl}" class="btn" target="_blank">Confirm Registration</a>
              </div>
              <p>If you did not initiate this request, please ignore this email.</p>
            </div>
            <div class="footer">
              <p>If the button above does not work, copy and paste this URL into your browser:</p>
              <p><a href="${verifyUrl}">${verifyUrl}</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    },
    ru: {
      subject: 'Подтвердите регистрацию - AMTRANS',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
            .container { max-width: 600px; background: #ffffff; margin: 0 auto; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .header { text-align: center; border-bottom: 1px solid #eef2f5; padding-bottom: 20px; margin-bottom: 20px; }
            .header h1 { color: #1e293b; margin: 0; font-size: 24px; }
            .content { color: #475569; font-size: 16px; line-height: 1.6; }
            .btn-wrapper { text-align: center; margin: 30px 0; }
            .btn { background-color: #2563eb; color: #ffffff !important; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; }
            .footer { font-size: 13px; color: #94a3b8; border-top: 1px solid #eef2f5; padding-top: 20px; margin-top: 30px; word-break: break-all; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Добро пожаловать в AMTRANS</h1>
            </div>
            <div class="content">
              <p>Спасибо за создание учетной записи в AMTRANS.</p>
              <p>Чтобы завершить регистрацию и подтвердить свой адрес электронной почты, нажмите кнопку ниже:</p>
              <div class="btn-wrapper">
                <a href="${verifyUrl}" class="btn" target="_blank">Подтвердить регистрацию</a>
              </div>
              <p>Если вы не отправляли этот запрос, просто проигнорируйте это письмо.</p>
            </div>
            <div class="footer">
              <p>Если кнопка выше не работает, скопируйте и вставьте эту ссылку в ваш браузер:</p>
              <p><a href="${verifyUrl}">${verifyUrl}</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    },
    hy: {
      subject: 'Հաստատեք գրանցումը - AMTRANS',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
            .container { max-width: 600px; background: #ffffff; margin: 0 auto; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .header { text-align: center; border-bottom: 1px solid #eef2f5; padding-bottom: 20px; margin-bottom: 20px; }
            .header h1 { color: #1e293b; margin: 0; font-size: 24px; }
            .content { color: #475569; font-size: 16px; line-height: 1.6; }
            .btn-wrapper { text-align: center; margin: 30px 0; }
            .btn { background-color: #2563eb; color: #ffffff !important; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; }
            .footer { font-size: 13px; color: #94a3b8; border-top: 1px solid #eef2f5; padding-top: 20px; margin-top: 30px; word-break: break-all; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Բարի գալուստ AMTRANS</h1>
            </div>
            <div class="content">
              <p>Շնորհակալություն AMTRANS-ում հաշիվ ստեղծելու համար:</p>
              <p>Գրանցումն ավարտելու և Ձեր էլ. հասցեն հաստատելու համար խնդրում ենք սեղմել ներքևի կոճակը.</p>
              <div class="btn-wrapper">
                <a href="${verifyUrl}" class="btn" target="_blank">Հաստատել գրանցումը</a>
              </div>
              <p>Եթե Դուք չեք կատարել այս հարցումը, խնդրում ենք անտեսել այս նամակը:</p>
            </div>
            <div class="footer">
              <p>Եթե վերևի կոճակը չի աշխատում, պատճենեք և տեղադրեք այս հղումը Ձեր բրաուզերում.</p>
              <p><a href="${verifyUrl}">${verifyUrl}</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    },
  };

  return templates[language] || templates.hy;
}

export interface ContactEmailTemplateParams {
  name: string;
  email: string;
  message: string;
  submittedAt: Date;
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function getContactEmailTemplate(params: ContactEmailTemplateParams): {
  subject: string;
  html: string;
  text: string;
} {
  const safeName = escapeHtml(params.name.trim());
  const safeEmail = escapeHtml(params.email.trim());
  const safeMessage = escapeHtml(params.message.trim());

  const formattedDate = params.submittedAt.toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'UTC',
  }) + ' (UTC)';

  const subject = `[AmTrans Contact] New inquiry from ${params.name.trim()}`;

  const text = `New Contact Us Submission - AmTrans

Customer Name: ${params.name.trim()}
Customer Email: ${params.email.trim()}
Submitted At: ${formattedDate}

Message:
${params.message.trim()}

--------------------------------------------------
To reply to the customer, simply reply to this email or send to ${params.email.trim()}.
`;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; -webkit-font-smoothing: antialiased;">
  <div style="max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <!-- Header -->
    <div style="background-color: #0f172a; padding: 28px 32px; border-bottom: 3px solid #2563eb;">
      <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em;">AMTRANS Express</h1>
      <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 13px; font-weight: 500;">New Contact Us Form Submission</p>
    </div>

    <!-- Main Content -->
    <div style="padding: 32px;">
      <!-- Customer Information Card -->
      <div style="background-color: #f1f5f9; border-radius: 8px; padding: 18px 20px; margin-bottom: 24px; border-left: 4px solid #2563eb;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #64748b; font-weight: 600; width: 130px;">Customer Name:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Customer Email:</td>
            <td style="padding: 6px 0;">
              <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Submitted Date:</td>
            <td style="padding: 6px 0; color: #334155;">${formattedDate}</td>
          </tr>
        </table>
      </div>

      <!-- Message Section -->
      <div style="margin-bottom: 24px;">
        <h3 style="color: #0f172a; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px 0;">
          Message
        </h3>
        <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-break: break-word;">${safeMessage}</div>
      </div>

      <!-- Quick Action / Reply Notice -->
      <div style="background-color: #eff6ff; border: 1px dashed #3b82f6; border-radius: 8px; padding: 14px 18px; margin-top: 24px;">
        <p style="margin: 0; font-size: 13px; color: #1e40af; line-height: 1.5;">
          <strong>Quick Reply:</strong> Click <em>Reply</em> in your email client to respond directly to <strong>${safeName}</strong> at <a href="mailto:${safeEmail}" style="color: #1e40af; text-decoration: underline;">${safeEmail}</a>.
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; font-size: 12px; color: #94a3b8; text-align: center;">
      <p style="margin: 0;">This email was sent via the AmTrans Contact Us inquiry form.</p>
    </div>
  </div>
</body>
</html>`;

  return { subject, html, text };
}

// ─── Dual-Channel Order Notification Templates (mirroring Telegram) ───

export function formatNotificationEmail(
  subject: string,
  textContent: string,
  orderUrl?: string,
  trackingNumber?: string,
): EmailTemplateContent {
  const safeSubject = escapeHtml(subject);

  // Extract clean plain text without HTML tags for plain-text email clients
  const plainText = textContent
    .replace(/<a\s+href="([^"]+)">([^<]+)<\/a>/gi, '$2 ($1)')
    .replace(/<[^>]+>/g, '')
    .trim();

  // Preheader snippet (first 100 characters of message)
  const preheaderText = plainText.replace(/\s+/g, ' ').slice(0, 120);

  // Safely extract Telegram raw HTML links before escaping prose
  const linkTokens: { url: string; text: string }[] = [];
  const textWithPlaceholders = textContent.replace(
    /<a\s+href="([^"]+)">([^<]+)<\/a>/gi,
    (_, url, linkText) => {
      const idx = linkTokens.length;
      linkTokens.push({ url, text: linkText });
      return `__AMTRANS_LINK_TOKEN_${idx}__`;
    },
  );

  const formattedHtml = textWithPlaceholders
    .split('\n\n')
    .map((paragraph) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return '';
      if (trimmed === '---') {
        return '<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">';
      }

      let html = escapeHtml(trimmed);

      // Restore link placeholders with styled anchor tags
      linkTokens.forEach((link, idx) => {
        const token = `__AMTRANS_LINK_TOKEN_${idx}__`;
        html = html.replace(
          token,
          `<a href="${escapeHtml(link.url)}" target="_blank" style="color: #2563eb; text-decoration: underline; font-weight: 600;">${escapeHtml(link.text)}</a>`,
        );
      });

      // Convert markdown **bold** to <strong>
      html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

      // Convert [Label] URL or [Label] (URL) to link
      html = html.replace(
        /\[([^\]]+)\]\s*\(?(https?:\/\/[^\s<)]+)\)?/g,
        '<a href="$2" target="_blank" style="color: #2563eb; text-decoration: underline; font-weight: 600;">$1</a>',
      );

      // Convert remaining raw URLs that are not part of an existing href
      html = html.replace(
        /(?<!href=")(https?:\/\/[^\s<]+)/g,
        '<a href="$1" target="_blank" style="color: #2563eb; text-decoration: underline;">$1</a>',
      );

      // Convert newlines inside paragraphs to <br>
      html = html.replace(/\n/g, '<br>');

      return `<p style="margin: 0 0 16px 0; color: #334155; font-size: 15px; line-height: 1.6;">${html}</p>`;
    })
    .filter(Boolean)
    .join('\n');

  const trackingBadgeHtml = trackingNumber
    ? `
      <div style="background-color: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 18px; margin-bottom: 24px; text-align: center;">
        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 700; display: block; margin-bottom: 2px;">Tracking Number</span>
        <span style="font-size: 18px; font-weight: 800; color: #0f172a; font-family: 'Courier New', Courier, monospace; letter-spacing: 0.5px;">${escapeHtml(trackingNumber)}</span>
      </div>
    `
    : '';

  const actionButtonHtml = orderUrl
    ? `
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 28px auto 12px auto;">
        <tr>
          <td align="center" style="border-radius: 6px; background-color: #2563eb;">
            <a href="${orderUrl}" target="_blank" style="font-size: 15px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 6px; padding: 12px 28px; border: 1px solid #2563eb; display: inline-block; font-weight: 600;">
              View Order in Dashboard &rarr;
            </a>
          </td>
        </tr>
      </table>
    `
    : '';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${safeSubject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px 0; color: #1e293b; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <!-- Hidden Preheader -->
  <div style="display: none; font-size: 1px; color: #f8fafc; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
    ${escapeHtml(preheaderText)}
  </div>

  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 0 16px;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <!-- Brand Header -->
          <tr>
            <td style="background-color: #0f172a; padding: 24px 32px; border-bottom: 3px solid #2563eb; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">AMTRANS Express</h1>
              <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 13px; font-weight: 500;">Cargo &amp; Shipping Notification</p>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              ${trackingBadgeHtml}
              ${formattedHtml}
              ${actionButtonHtml}
            </td>
          </tr>

          <!-- Trust & Transactional Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; font-size: 12px; color: #64748b; line-height: 1.5; text-align: center;">
              <p style="margin: 0 0 6px 0; font-weight: 700; color: #334155;">AmTrans Express • Logistics &amp; Cargo Solutions</p>
              <p style="margin: 0 0 6px 0;">This is an automated operational notification regarding your shipment.</p>
              <p style="margin: 0; color: #94a3b8;">You received this transactional email because an order was registered or updated for your account on AmTrans.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return {
    subject,
    html,
    text: plainText,
  };
}

/**
 * Customer shipping price estimate email template.
 */
export function getEstimateSubmittedEmailTemplate(
  params: TelegramEstimateNotificationParams,
): EmailTemplateContent {
  const textContent = getEstimateSubmittedTelegramTemplate(params);
  const tracking = params.trackingNumber || 'Order';
  const subject = `AmTrans: Shipping Price Estimate for Order ${tracking}`;
  return formatNotificationEmail(subject, textContent, params.orderUrl, tracking);
}

/**
 * Customer order status update email template.
 */
export function getCustomerStatusUpdateEmailTemplate(
  status: OrderStatus | string,
  params: TelegramCustomerStatusNotificationParams,
): EmailTemplateContent | null {
  const textContent = getCustomerStatusUpdateTelegramTemplate(status, params);
  if (!textContent) return null;

  const tracking = params.trackingNumber || 'Order';
  let subject = `AmTrans: Status Update for Order ${tracking}`;

  switch (status) {
    case OrderStatus.UNDER_REVIEW:
      subject = `AmTrans: Order ${tracking} is Under Review`;
      break;
    case OrderStatus.PENDING_ESTIMATE:
      subject = `AmTrans: Shipping Estimate in Progress for Order ${tracking}`;
      break;
    case OrderStatus.REGISTERED:
      subject = `AmTrans: Order ${tracking} Confirmed & Registered`;
      break;
    case OrderStatus.REJECTED:
      subject = `AmTrans: Update Regarding Order ${tracking}`;
      break;
    case OrderStatus.FOREIGN_WAREHOUSE:
      subject = `AmTrans: Order ${tracking} Arrived at Foreign Warehouse`;
      break;
    case OrderStatus.IN_TRANSIT:
      subject = `AmTrans: Order ${tracking} is in Transit`;
      break;
    case OrderStatus.ARRIVED:
      subject = `AmTrans: Order ${tracking} Arrived in Armenia`;
      break;
    case OrderStatus.READY:
      subject = `AmTrans: Order ${tracking} is Ready for Pickup`;
      break;
    case OrderStatus.DELIVERED:
      subject = `AmTrans: Order ${tracking} Successfully Delivered`;
      break;
  }

  return formatNotificationEmail(subject, textContent, params.orderUrl, tracking);
}
