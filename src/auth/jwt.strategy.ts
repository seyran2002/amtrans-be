import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Role } from '../../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';

export interface JwtPayload {
  id?: string;
  sub?: string;
  email: string;
  role: Role;
  [key: string]: any;
}

export interface UserFromJwt {
  id: string;
  email: string;
  role: Role;
  [key: string]: any;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const secret = configService.get<string>('JWT_SECRET');
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret || 'supersecretjwtkey_amtrans_production_ready_secret_key_2026',
    });
  }

  async validate(payload: JwtPayload): Promise<UserFromJwt> {
    const userId = payload.id || payload.sub;

    if (!payload || !userId || !payload.email) {
      throw new UnauthorizedException('Invalid token payload');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const { password: _, ...safeUser } = user;
    return safeUser;
  }
}
