import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { ContactService, ContactResponse } from './contact.service';
import { ContactDto } from './dto/contact.dto';
import { ContactRateLimitGuard } from './contact-rate-limit.guard';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @UseGuards(ContactRateLimitGuard)
  async submitContact(
    @Body() contactDto: ContactDto,
    @Req() req: Request,
  ): Promise<ContactResponse> {
    const forwarded = req.headers['x-forwarded-for'];
    const clientIp = typeof forwarded === 'string'
      ? forwarded.split(',')[0].trim()
      : req.socket?.remoteAddress || req.ip;

    return this.contactService.handleContactSubmission(contactDto, clientIp);
  }
}
