import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ObjectsService } from './objects.service';
import { Prisma } from '@prisma/client';

@Controller('objects')
export class ObjectsController {
  constructor(private readonly objectsService: ObjectsService) {}

  @Post()
  create(@Body() createObjectDto: Prisma.ObjectCreateInput) {
    return this.objectsService.create(createObjectDto);
  }

  @Get()
  findAll() {
    return this.objectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateObjectDto: Prisma.ObjectUpdateInput,
  ) {
    return this.objectsService.update(+id, updateObjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectsService.remove(+id);
  }
}
