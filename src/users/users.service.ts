import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  findByEmail(email: string) {
    return this.usersRepo.findOneBy({ email });
  }

  create(user: Partial<User>) {
    return this.usersRepo.save(user);
  }
}
