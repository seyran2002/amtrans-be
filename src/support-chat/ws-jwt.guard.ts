import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';
import { PrismaService } from '../prisma/prisma.service';
import { UserStatus } from '../../generated/prisma';

export interface ValidatedWsUser {
  id: string;
  isSupporter: boolean;
  status: UserStatus;
}

export async function validateWsClient(
  client: Socket,
  jwtService: JwtService,
  prisma: PrismaService,
): Promise<ValidatedWsUser> {
  let token: string | undefined;

  const authHeader = client.handshake.headers?.authorization;
  if (authHeader) {
    if (typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
      token = authHeader.slice(7).trim();
    } else if (typeof authHeader === 'string') {
      token = authHeader.trim();
    }
  }

  if (!token && client.handshake.auth?.token) {
    const authToken = client.handshake.auth.token;
    if (typeof authToken === 'string' && authToken.startsWith('Bearer ')) {
      token = authToken.slice(7).trim();
    } else if (typeof authToken === 'string') {
      token = authToken.trim();
    }
  }

  if (!token) {
    throw new UnauthorizedException('No authentication token provided');
  }

  let payload: any;
  try {
    payload = jwtService.verify(token);
  } catch (error: any) {
    throw new UnauthorizedException('Invalid or expired authentication token');
  }

  const userId = payload?.id || payload?.sub;
  if (!userId) {
    throw new UnauthorizedException('Invalid token payload: missing user ID');
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      isSupporter: true,
      status: true,
    },
  });

  if (!user) {
    throw new UnauthorizedException('User does not exist');
  }

  if (user.status !== UserStatus.ACTIVE) {
    throw new UnauthorizedException('User account is not active');
  }

  return user;
}

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client: Socket = context.switchToWs().getClient();
    const user = await validateWsClient(client, this.jwtService, this.prisma);
    client.data = client.data || {};
    client.data.user = user;
    return true;
  }
}

