import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';
import { ResponseTaskDto } from './dto/response-task.dto';
import { TaskStatusEnum } from './enum/task.enum';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  private tasks: TaskEntity[] = [];

  async create(task: CreateTaskDto): Promise<Partial<CreateTaskDto>> {
    try {
      const taskToSave: TaskEntity = {
        title: task.title,
        description: task.description,
        expirationDate: task.expirationDate,
        status: TaskStatusEnum.TO_DO,
      };
      const createdTask = await this.taskRepository.save(taskToSave);
      return { id: createdTask.id, title: createdTask.title };
    } catch (error: unknown) {
      console.error('Error creating task:', error);
      throw new Error('Failed to create task');
    }
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findById(id: string): Promise<ResponseTaskDto> {
    const taskFound = await this.taskRepository.findOne({ where: { id } });

    if (!taskFound) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }

    return {
      id: taskFound.id,
      title: taskFound.title,
      status: taskFound.status,
    };
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    let found = false;
    this.tasks = this.tasks.map((task) => {
      if (task.id === id.toString()) {
        found = true;
        return { ...task, ...updateTaskDto };
      }
      return task;
    });
    if (!found) {
      // Optionally, handle the case when the task is not found
      // e.g., throw an exception or return a message
    }
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
