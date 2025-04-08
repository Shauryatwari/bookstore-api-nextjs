import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private users: UsersService, private jwt: JwtService) {}

  async signup(email: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);
    const user = await this.users.create({ email, password: hashed });
    return { id: user.id, email: user.email };
  }

  async login(email: string, password: string) {
    const user = await this.users.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = this.jwt.sign({ sub: user.id });
    return { access_token: token };
  }
}
