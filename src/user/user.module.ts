import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { users } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([users])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
