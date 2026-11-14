import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { SystemSettingsService } from './system-settings.service';
import { UpdateSystemSettingsDto } from './dto/update-system-settings.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../../generated/prisma';

@Controller('admin/settings')
export class SystemSettingsController {
  constructor(private readonly systemSettingsService: SystemSettingsService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getSettings() {
    return this.systemSettingsService.getSettings();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Patch()
  @HttpCode(HttpStatus.OK)
  async updateSettings(@Body() dto: UpdateSystemSettingsDto) {
    return this.systemSettingsService.updateSettings(dto);
  }
}
