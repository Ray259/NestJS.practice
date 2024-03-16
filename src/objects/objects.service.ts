import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from '../db/db.service';

@Injectable()
export class ObjectsService {
  constructor(private readonly dbService: DbService) {}

  async create(createObjectDto: Prisma.ObjectCreateInput) {
    return this.dbService.object.create({ data: createObjectDto });
  }

  findAll() {
    return this.dbService.object.findMany({});
  }

  findOne(id: number) {
    return this.dbService.object.findUnique({ where: { id } });
  }

  update(id: number, updateObjectDto: Prisma.ObjectUpdateInput) {
    return this.dbService.object.update({
      where: {
        id,
      },
      data: updateObjectDto,
    });
  }

  remove(id: number) {
    return this.dbService.object.delete({ where: { id } });
  }
}
