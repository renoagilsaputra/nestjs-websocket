import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOptionsWhere, Repository, ILike } from 'typeorm';

@Injectable()
export class TodoService {
  private readonly todoRepo: Repository<Todo>;
  constructor(

  ) { }

  create(createTodoDto: CreateTodoDto) {

    return 'This action adds a new todo';
  }

  async findAll() {
    const data = this.todoRepo.find();

    return `This action returns all todo`;
  }


}
