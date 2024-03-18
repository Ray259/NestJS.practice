import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ObjectsModule } from './objects/objects.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DbModule, ObjectsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
