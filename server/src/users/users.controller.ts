import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Get,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/schema/users.schema';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userservice: UsersService) {}
  @UseGuards(AuthGuard)
  @Get('all')
  getAllUser() {
    return this.userservice.getAllUser();
  }
}
