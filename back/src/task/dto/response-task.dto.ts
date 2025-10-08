import { PartialType } from '@nestjs/mapped-types';
import { TaskEntity } from '../entities/task.entity';

export class ResponseTaskDto extends PartialType(TaskEntity) {}
