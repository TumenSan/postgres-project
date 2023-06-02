import { Controller, Get, Post, Body } from '@nestjs/common';

import { users } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<users[]> {
    return this.userService.findAll();
  }

  @Post()
  createOneUser(@Body() user: users): Promise<users> {
    return this.userService.createOne(user);
  }

  /*
  @Get()
  getHello(): string {
    return 'Hello World user!';
  }
  */
}
