import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateSystemSettingsDto } from './dto/update-system-settings.dto';

export const SETTINGS_ID = 'default';

@Injectable()
export class SystemSettingsService {
  constructor(private readonly prisma: PrismaService) { }

  async getSettings() {
    return this.prisma.systemSetting.findFirst();
  }

  async updateSettings(dto: UpdateSystemSettingsDto | Record<string, any>) {

    return this.prisma.systemSetting.update({
      where: { id: SETTINGS_ID },
      data: {
        ...dto,
      },
    });
  }
}
