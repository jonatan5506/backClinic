import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

import { TaskStatusEnum } from '../enum/task.enum';

export class CreateTaskDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @MinLength(3, { message: 'O título deve ter no mínimo 3 caracteres' })
  @MaxLength(256, { message: 'O título deve ter no máximo 256 caracteres' })
  title: string;

  @IsString()
  @MinLength(5, { message: 'O título deve ter no mínimo 3 caracteres' })
  @MaxLength(512, { message: 'O título deve ter no máximo 256 caracteres' })
  description: string;

  @IsEnum(TaskStatusEnum, { message: 'Status inválido' })
  @IsOptional()
  status: TaskStatusEnum;

  @IsDateString()
  @IsOptional()
  expirationDate: Date;
}
