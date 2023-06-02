import { Controller, Get } from '@nestjs/common';

import { users } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<users[]> {
    return this.userService.findAll();
  }

  /*
  @Get()
  getHello(): string {
    return 'Hello World user!';
  }
  */
}
