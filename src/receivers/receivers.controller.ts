import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ReceiversService } from './receivers.service';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('receivers')
@UseGuards(JwtAuthGuard)
export class ReceiversController {
  constructor(private readonly receiversService: ReceiversService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Request() req: { user: { id: string } },
    @Body() createReceiverDto: CreateReceiverDto,
  ) {
    return this.receiversService.create(req.user.id, createReceiverDto);
  }

  @Get()
  async findAll(@Request() req: { user: { id: string } }) {
    return this.receiversService.findAll(req.user.id);
  }

  @Get(':receiverId')
  async findOne(
    @Request() req: { user: { id: string } },
    @Param('receiverId') receiverId: string,
  ) {
    return this.receiversService.findOne(req.user.id, receiverId);
  }

  @Put(':receiverId')
  @HttpCode(HttpStatus.OK)
  async update(
    @Request() req: { user: { id: string } },
    @Param('receiverId') receiverId: string,
    @Body() updateReceiverDto: UpdateReceiverDto,
  ) {
    return this.receiversService.update(req.user.id, receiverId, updateReceiverDto);
  }

  @Delete(':receiverId')
  @HttpCode(HttpStatus.OK)
  async remove(
    @Request() req: { user: { id: string } },
    @Param('receiverId') receiverId: string,
  ) {
    return this.receiversService.remove(req.user.id, receiverId);
  }
}