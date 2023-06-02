import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(users)
    private userRepository: Repository<users>,
  ) {}

  findAll(): Promise<users[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<users> {
    return this.userRepository.findOneBy({ id });
  }

  async deleteById(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
