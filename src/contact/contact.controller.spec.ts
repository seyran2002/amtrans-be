import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactRateLimitGuard } from './contact-rate-limit.guard';
import { Request } from 'express';

describe('ContactController', () => {
  let controller: ContactController;
  let service: jest.Mocked<ContactService>;

  beforeEach(async () => {
    const mockContactService = {
      handleContactSubmission: jest.fn().mockResolvedValue({
        success: true,
        message: 'Your message has been sent successfully.',
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [
        {
          provide: ContactService,
          useValue: mockContactService,
        },
        ContactRateLimitGuard,
      ],
    }).compile();

    controller = module.get<ContactController>(ContactController);
    service = module.get(ContactService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should pass dto and client ip to service.handleContactSubmission', async () => {
    const dto = {
      name: 'Bob Test',
      email: 'bob@test.com',
      message: 'Hello, this is a test message.',
    };

    const mockReq = {
      headers: { 'x-forwarded-for': '203.0.113.195' },
      socket: { remoteAddress: '127.0.0.1' },
    } as unknown as Request;

    const result = await controller.submitContact(dto, mockReq);

    expect(result.success).toBe(true);
    expect(service.handleContactSubmission).toHaveBeenCalledWith(
      dto,
      '203.0.113.195',
    );
  });
});
