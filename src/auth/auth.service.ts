import {
  Injectable,
  Dependencies,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Dependencies(UsersService, JwtService)
@Injectable()
export class AuthService {
  private usersService: UsersService;
  private jwtService: JwtService;
  constructor(usersService, jwtService) {
    this.usersService = usersService;
    this.jwtService = jwtService;
  }

  async signIn(username, pass) {
    const user = await this.usersService.findOne(username);
    if (!bcrypt.compare(pass, user?.password)) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.uid };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
