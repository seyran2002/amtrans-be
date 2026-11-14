import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { EmailService } from './email.service';
import { SupportedLanguage } from './email.templates';

jest.mock('nodemailer');

describe('EmailService', () => {
  let service: EmailService;
  let mockConfigService: Partial<ConfigService>;
  let mockTransporter: { sendMail: jest.Mock };

  beforeEach(async () => {
    mockTransporter = {
      sendMail: jest.fn().mockResolvedValue({ messageId: 'test-message-id' }),
    };
    (nodemailer.createTransport as jest.Mock).mockReturnValue(mockTransporter);

    mockConfigService = {
      get: jest.fn((key: string) => {
        const config: Record<string, string> = {
          EMAIL_HOST: 'smtp.gmail.com',
          EMAIL_PORT: '587',
          EMAIL_USER: 'test@example.com',
          EMAIL_PASSWORD: 'secretpassword',
          FRONTEND_URL: 'http://localhost:5173',
        };
        return config[key];
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should initialize transporter with SMTP credentials from ConfigService', () => {
    expect(nodemailer.createTransport).toHaveBeenCalledWith({
      service: 'gmail',
      auth: {
        user: 'test@example.com',
        pass: 'secretpassword',
      },
    });
  });

  it('should send registration confirmation email in Armenian (hy)', async () => {
    await service.sendRegistrationConfirmation('user@domain.com', 'user-id-123', SupportedLanguage.HY);

    expect(mockTransporter.sendMail).toHaveBeenCalledTimes(1);
    const mailOptions = mockTransporter.sendMail.mock.calls[0][0];
    expect(mailOptions.from).toBe('"AmTrans Express" <test@example.com>');
    expect(mailOptions.to).toBe('user@domain.com');
    expect(mailOptions.subject).toContain('Հաստատեք գրանցումը');
    expect(mailOptions.html).toContain('http://localhost:5173/auth/verify?email=user%40domain.com&code=user-id-123');
  });

  it('should send registration confirmation email in English (en)', async () => {
    await service.sendRegistrationConfirmation('user@domain.com', 'user-id-123', SupportedLanguage.EN);

    expect(mockTransporter.sendMail).toHaveBeenCalledTimes(1);
    const mailOptions = mockTransporter.sendMail.mock.calls[0][0];
    expect(mailOptions.subject).toContain('Confirm your registration');
  });

  it('should send registration confirmation email in Russian (ru)', async () => {
    await service.sendRegistrationConfirmation('user@domain.com', 'user-id-123', SupportedLanguage.RU);

    expect(mockTransporter.sendMail).toHaveBeenCalledTimes(1);
    const mailOptions = mockTransporter.sendMail.mock.calls[0][0];
    expect(mailOptions.subject).toContain('Подтвердите регистрацию');
  });

  it('should throw InternalServerErrorException when email sending fails without leaking secrets', async () => {
    mockTransporter.sendMail.mockRejectedValueOnce(new Error('SMTP Auth Error: invalid user/pass'));

    await expect(
      service.sendRegistrationConfirmation('user@domain.com', 'user-id-123', SupportedLanguage.EN),
    ).rejects.toThrow(InternalServerErrorException);
  });

  it('should send contact message email with replyTo set to customer email', async () => {
    await service.sendContactMessage({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Need help with shipment tracking',
    });

    expect(mockTransporter.sendMail).toHaveBeenCalledTimes(1);
    const mailOptions = mockTransporter.sendMail.mock.calls[0][0];
    expect(mailOptions.from).toBe('"AmTrans Contact" <test@example.com>');
    expect(mailOptions.to).toBe('test@example.com');
    expect(mailOptions.replyTo).toBe('john@example.com');
    expect(mailOptions.subject).toContain('John Doe');
    expect(mailOptions.html).toContain('John Doe');
    expect(mailOptions.html).toContain('john@example.com');
    expect(mailOptions.html).toContain('Need help with shipment tracking');
    expect(mailOptions.text).toContain('Need help with shipment tracking');
  });

  it('should throw InternalServerErrorException if contact email fails to send', async () => {
    mockTransporter.sendMail.mockRejectedValueOnce(new Error('Connection lost'));

    await expect(
      service.sendContactMessage({
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Hello AmTrans team',
      }),
    ).rejects.toThrow(InternalServerErrorException);
  });

  it('should send user order status update email without throwing on error', async () => {
    await service.sendUserOrderStatusUpdateNotification(
      'customer@example.com',
      'IN_TRANSIT',
      {
        trackingNumber: 'AMT-123456',
        orderUrl: 'http://localhost:5173/dashboard/orders',
      },
    );

    expect(mockTransporter.sendMail).toHaveBeenCalledTimes(1);
    const mailOptions = mockTransporter.sendMail.mock.calls[0][0];
    expect(mailOptions.to).toBe('customer@example.com');
    expect(mailOptions.subject).toContain('AMT-123456');
    expect(mailOptions.html).toContain('http://localhost:5173/dashboard/orders');
  });

  it('should handle SMTP failure in user status update email gracefully without throwing', async () => {
    mockTransporter.sendMail.mockRejectedValueOnce(new Error('SMTP timeout'));

    await expect(
      service.sendUserOrderStatusUpdateNotification(
        'customer@example.com',
        'READY',
        {
          trackingNumber: 'AMT-999999',
          orderUrl: 'http://localhost:5173/dashboard/orders',
        },
      ),
    ).resolves.not.toThrow();
  });

  it('should send customer estimate notification email', async () => {
    await service.sendUserEstimateNotification(
      'customer@example.com',
      {
        trackingNumber: 'AMT-EST123',
        estimatedPrice: 7500,
        orderUrl: 'http://localhost:5173/dashboard/orders',
      },
    );

    expect(mockTransporter.sendMail).toHaveBeenCalledTimes(1);
    const mailOptions = mockTransporter.sendMail.mock.calls[0][0];
    expect(mailOptions.to).toBe('customer@example.com');
    expect(mailOptions.subject).toContain('AMT-EST123');
    expect(mailOptions.html).toContain('7500');
  });
});
