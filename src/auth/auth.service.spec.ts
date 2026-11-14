import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { Role, UserStatus } from '../../generated/prisma';
import { SupportedLanguage } from '../email/email.templates';

describe('AuthService', () => {
  let service: AuthService;
  let mockPrismaService: {
    user: {
      findUnique: jest.Mock;
      create: jest.Mock;
    };
  };
  let mockEmailService: {
    sendRegistrationConfirmation: jest.Mock;
  };
  let mockJwtService: {
    signAsync: jest.Mock;
  };

  beforeEach(async () => {
    mockPrismaService = {
      user: {
        findUnique: jest.fn(),
        create: jest.fn(),
      },
    };

    mockEmailService = {
      sendRegistrationConfirmation: jest.fn().mockResolvedValue(undefined),
    };

    mockJwtService = {
      signAsync: jest.fn().mockResolvedValue('mocked_jwt_token'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: EmailService,
          useValue: mockEmailService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should register a new user and send confirmation email', async () => {
      const registerDto = {
        email: ' TestUser@example.com ',
        password: 'password123',
        language: SupportedLanguage.EN,
      };

      mockPrismaService.user.findUnique.mockResolvedValue(null);
      mockPrismaService.user.create.mockResolvedValue({
        id: 'uuid-123',
        email: 'testuser@example.com',
        role: Role.CUSTOMER,
        status: UserStatus.PENDING,
      });

      const result = await service.register(registerDto);

      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'testuser@example.com' },
      });
      expect(mockPrismaService.user.create).toHaveBeenCalled();
      expect(mockEmailService.sendRegistrationConfirmation).toHaveBeenCalledWith(
        'testuser@example.com',
        'uuid-123',
        SupportedLanguage.EN,
      );
      expect(result).toEqual({
        message: 'Registration successful. Please check your email to confirm registration.',
        userId: 'uuid-123',
        email: 'testuser@example.com',
        status: UserStatus.PENDING,
      });
    });

    it('should throw ConflictException if email is already registered', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue({ id: 'existing-id' });

      await expect(
        service.register({
          email: 'test@example.com',
          password: 'password123',
          language: SupportedLanguage.EN,
        }),
      ).rejects.toThrow(ConflictException);
    });

    it('should propagate error if email sending fails', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);
      mockPrismaService.user.create.mockResolvedValue({
        id: 'uuid-123',
        email: 'testuser@example.com',
        role: Role.CUSTOMER,
        status: UserStatus.PENDING,
      });
      mockEmailService.sendRegistrationConfirmation.mockRejectedValue(
        new InternalServerErrorException('Failed to send verification email. Please try again later.'),
      );

      await expect(
        service.register({
          email: 'testuser@example.com',
          password: 'password123',
          language: SupportedLanguage.EN,
        }),
      ).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('login', () => {
    it('should return an access token and user info on valid credentials', async () => {
      const loginDto = {
        email: 'user@example.com',
        password: 'password123',
      };

      const hashedPassword = await bcrypt.hash('password123', 10);
      const mockUser = {
        id: 'user-uuid-123',
        email: 'user@example.com',
        password: hashedPassword,
        role: Role.CUSTOMER,
        status: UserStatus.ACTIVE,
      };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.login(loginDto);

      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'user@example.com' },
      });
      expect(mockJwtService.signAsync).toHaveBeenCalledWith({
        id: mockUser.id,
        sub: mockUser.id,
        email: mockUser.email,
        role: mockUser.role,
      });
      expect(result).toEqual({
        access_token: 'mocked_jwt_token',
        user: {
          id: mockUser.id,
          email: mockUser.email,
          role: mockUser.role,
          status: mockUser.status,
        },
      });
    });

    it('should throw UnauthorizedException if user is not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(
        service.login({
          email: 'unknown@example.com',
          password: 'password123',
        }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if password does not match', async () => {
      const hashedPassword = await bcrypt.hash('correct_password', 10);
      mockPrismaService.user.findUnique.mockResolvedValue({
        id: 'user-uuid',
        email: 'user@example.com',
        password: hashedPassword,
        role: Role.CUSTOMER,
      });

      await expect(
        service.login({
          email: 'user@example.com',
          password: 'wrong_password',
        }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
