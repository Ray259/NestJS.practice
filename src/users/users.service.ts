import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from '../db/db.service';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DbService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.dbService.object.create({ data: createUserDto });
  }

  findAll() {
    return this.dbService.object.findMany({});
  }

  findOne(id: number) {
    return this.dbService.object.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.dbService.object.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.dbService.object.delete({ where: { id } });
  }
}
