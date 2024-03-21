import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from '../db/db.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DbService) {}

  async signIn(username: string, password: string) {
    const user = await this.dbService.user.findUnique({
      where: { username },
    });
    if (!bcrypt.compare(password, user.password)) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    const hash = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hash;
    return this.dbService.user.create({ data: createUserDto });
  }

  findAll() {
    return this.dbService.user.findMany({});
  }

  findOne(uid: string) {
    return this.dbService.user.findUnique({ where: { uid } });
  }

  update(uid: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.dbService.user.update({
      where: {
        uid,
      },
      data: updateUserDto,
    });
  }

  remove(uid: string) {
    return this.dbService.user.delete({ where: { uid } });
  }
}
