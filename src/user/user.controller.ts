/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class TreeController {
  constructor(private readonly treeService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.treeService.findAll();
  }
}