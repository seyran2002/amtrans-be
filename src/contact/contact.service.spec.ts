import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { EmailService } from '../email/email.service';

describe('ContactService', () => {
  let service: ContactService;
  let emailService: jest.Mocked<EmailService>;

  beforeEach(async () => {
    const mockEmailService = {
      sendContactMessage: jest.fn().mockResolvedValue(undefined),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
        {
          provide: EmailService,
          useValue: mockEmailService,
        },
      ],
    }).compile();

    service = module.get<ContactService>(ContactService);
    emailService = module.get(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should dispatch contact email for legitimate submissions', async () => {
    const dto = {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      message: 'Inquiring about international container shipping rates.',
    };

    const result = await service.handleContactSubmission(dto, '192.168.1.100');

    expect(result.success).toBe(true);
    expect(emailService.sendContactMessage).toHaveBeenCalledTimes(1);
    expect(emailService.sendContactMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Alice Johnson',
        email: 'alice@example.com',
        message: 'Inquiring about international container shipping rates.',
      }),
    );
  });

  it('should drop submission silently without sending email when honeypot is filled by bot', async () => {
    const botDto = {
      name: 'Spam Bot',
      email: 'bot@spam.com',
      message: 'Buy cheap watches here',
      _hp: 'http://spamlink.com',
    };

    const result = await service.handleContactSubmission(botDto, '1.2.3.4');

    expect(result.success).toBe(true);
    expect(emailService.sendContactMessage).not.toHaveBeenCalled();
  });
});
