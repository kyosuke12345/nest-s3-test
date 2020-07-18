import { User } from './../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findOne(username: string) {
    return this.userRepository.findOne({ where: { loginId: username } });
  }
}
