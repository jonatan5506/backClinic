import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskEntity } from './entities/task.entity';

@Module({
  controllers: [TaskController],
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskService, JwtService],
})
export class TaskModule {}
