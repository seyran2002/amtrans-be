import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class CountriesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinary: CloudinaryService,
  ) { }

  async findAll() {
    return this.prisma.country.findMany({
      orderBy: { enName: 'asc' },
    });
  }

  async findAllWithOffices() {
    return this.prisma.country.findMany({
      include: { offices: true },
      orderBy: { enName: 'asc' },
    });
  }

  async create(dto: CreateCountryDto, flagFile: { buffer: Buffer }) {
    if (!flagFile) {
      throw new BadRequestException('Flag image is required');
    }

    let flagUrl: string;
    try {
      const result = await this.cloudinary.uploadImage(flagFile, 'flags');
      flagUrl = result.secureUrl;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error('Cloudinary flag upload error:', error);
      throw new InternalServerErrorException(
        `Failed to upload flag image to Cloudinary: ${(error as any)?.message || error}`,
      );
    }

    return this.prisma.country.create({
      data: {
        hyName: dto.hyName,
        ruName: dto.ruName,
        enName: dto.enName,
        icon: flagUrl,
      },
    });
  }

  async remove(id: string) {
    const country = await this.prisma.country.findUnique({
      where: { id },
      include: { _count: { select: { offices: true } } },
    });

    if (!country) {
      throw new NotFoundException(`Country with id "${id}" not found`);
    }

    if (country._count.offices > 0) {
      throw new BadRequestException(
        `Cannot delete country "${country.enName}" because it has ${country._count.offices} associated office(s). Remove all offices first.`,
      );
    }

    await this.prisma.country.delete({ where: { id } });

    return { message: 'Country deleted successfully' };
  }
}
