// <reference types="multer" />
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { SubmitEstimateDto } from './dto/submit-estimate.dto';
import { RespondEstimateDto } from './dto/respond-estimate.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../../generated/prisma';
import { UserFromJwt } from '../auth/jwt.strategy';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('my')
  @HttpCode(HttpStatus.OK)
  async findMyOrders(@Request() req: { user: UserFromJwt }) {
    return this.ordersService.findMyOrders(req.user.id);
  }

  @Get('by-office/:officeId')
  @HttpCode(HttpStatus.OK)
  async findByOfficeIdParam(@Param('officeId') officeId: string) {
    return this.ordersService.findByOfficeId(officeId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
  ) {
    return this.ordersService.findOne(id, req.user);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('invoice'))
  async create(
    @Request() req: { user: UserFromJwt },
    @Body() createOrderDto: CreateOrderDto,
    @UploadedFile() invoice?: Express.Multer.File,
  ) {
    return this.ordersService.create(req.user, createOrderDto, invoice);
  }

  @Post(':id/estimate')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.OPERATOR)
  @HttpCode(HttpStatus.OK)
  async submitEstimatePost(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
    @Body() submitEstimateDto: SubmitEstimateDto,
  ) {
    return this.ordersService.submitEstimate(id, req.user, submitEstimateDto);
  }

  @Patch(':id/estimate')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.OPERATOR)
  @HttpCode(HttpStatus.OK)
  async submitEstimate(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
    @Body() submitEstimateDto: SubmitEstimateDto,
  ) {
    return this.ordersService.submitEstimate(id, req.user, submitEstimateDto);
  }

  @Post(':id/estimate/respond')
  @HttpCode(HttpStatus.OK)
  async respondToEstimatePost(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
    @Body() respondEstimateDto: RespondEstimateDto,
  ) {
    return this.ordersService.respondToEstimate(id, req.user, respondEstimateDto);
  }

  @Patch(':id/estimate/respond')
  @HttpCode(HttpStatus.OK)
  async respondToEstimate(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
    @Body() respondEstimateDto: RespondEstimateDto,
  ) {
    return this.ordersService.respondToEstimate(id, req.user, respondEstimateDto);
  }

  @Post(':id/estimate/accept')
  @HttpCode(HttpStatus.OK)
  async acceptEstimatePost(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
  ) {
    return this.ordersService.acceptEstimate(id, req.user);
  }

  @Patch(':id/estimate/accept')
  @HttpCode(HttpStatus.OK)
  async acceptEstimate(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
  ) {
    return this.ordersService.acceptEstimate(id, req.user);
  }

  @Post(':id/estimate/cancel')
  @HttpCode(HttpStatus.OK)
  async cancelEstimatePost(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
  ) {
    return this.ordersService.cancelEstimate(id, req.user);
  }

  @Patch(':id/estimate/cancel')
  @HttpCode(HttpStatus.OK)
  async cancelEstimate(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
  ) {
    return this.ordersService.cancelEstimate(id, req.user);
  }

  @Patch(':id/status')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.OPERATOR)
  @HttpCode(HttpStatus.OK)
  async updateStatus(
    @Param('id') id: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.ordersService.updateStatus(id, updateOrderStatusDto.status);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FileInterceptor('invoice'))
  async update(
    @Request() req: { user: UserFromJwt },
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
    @UploadedFile() invoice?: Express.Multer.File,
  ) {
    return this.ordersService.update(id, req.user, updateOrderDto, invoice);
  }
}
