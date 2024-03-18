import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from '../db/db.service';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DbService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
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
