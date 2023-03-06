import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/create-user.dto';

import { User } from './schema/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.Create(createUserDto);
  }
}
