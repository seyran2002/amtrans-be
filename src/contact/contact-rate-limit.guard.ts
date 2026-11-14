import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';

interface RateLimitRecord {
  count: number;
  firstRequestTime: number;
}

@Injectable()
export class ContactRateLimitGuard implements CanActivate {
  private readonly logger = new Logger(ContactRateLimitGuard.name);
  private readonly ipRequests = new Map<string, RateLimitRecord>();

  // Limit: max 5 requests per 10 minutes (600,000 ms) per client IP
  private readonly maxRequests = 5;
  private readonly windowMs = 10 * 60 * 1000;

  constructor() {
    // Periodically clean up expired entries to avoid memory leak
    setInterval(() => {
      const now = Date.now();
      for (const [ip, record] of this.ipRequests.entries()) {
        if (now - record.firstRequestTime > this.windowMs) {
          this.ipRequests.delete(ip);
        }
      }
    }, 5 * 60 * 1000).unref();
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const clientIp = this.getClientIp(request);

    const now = Date.now();
    const record = this.ipRequests.get(clientIp);

    if (!record) {
      this.ipRequests.set(clientIp, { count: 1, firstRequestTime: now });
      return true;
    }

    if (now - record.firstRequestTime > this.windowMs) {
      // Window has expired, reset counter
      this.ipRequests.set(clientIp, { count: 1, firstRequestTime: now });
      return true;
    }

    if (record.count >= this.maxRequests) {
      const remainingSeconds = Math.ceil(
        (this.windowMs - (now - record.firstRequestTime)) / 1000,
      );
      this.logger.warn(
        `Rate limit exceeded for contact form from IP: ${clientIp} (${record.count} attempts)`,
      );
      throw new HttpException(
        {
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
          message: `Too many contact requests. Please wait ${remainingSeconds} seconds before trying again.`,
          error: 'Too Many Requests',
        },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    record.count += 1;
    return true;
  }

  private getClientIp(req: Request): string {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') {
      return forwarded.split(',')[0].trim();
    }
    return req.socket?.remoteAddress || req.ip || '127.0.0.1';
  }
}
