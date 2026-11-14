import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../../generated/prisma';
import { UseGuards } from '@nestjs/common';

@Controller('countries')
@UseGuards(JwtAuthGuard)
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) { }

  @Get()
  async findAll() {
    return this.countriesService.findAll();
  }

  @Get('withOffices')
  async findAllWithOffices() {
    return this.countriesService.findAllWithOffices();
  }

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('flag'))
  async create(
    @Body() createCountryDto: CreateCountryDto,
    @UploadedFile() flag: { buffer: Buffer },
  ) {
    return this.countriesService.create(createCountryDto, flag);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.countriesService.remove(id);
  }
}
