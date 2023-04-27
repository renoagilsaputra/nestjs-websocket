import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOptionsWhere, Repository, ILike } from 'typeorm';

@Injectable()
export class TodoService {
  @InjectRepository(Todo)
  private readonly todoRepo: Repository<Todo>;
  constructor(

  ) { }

  async create(createTodoDto: CreateTodoDto) {
    
   await this.todoRepo.save(createTodoDto);
   const data = await this.todoRepo
   .createQueryBuilder()
   .getMany();
    return data;
  }

  async findAll() {

    const data = await this.todoRepo
      .createQueryBuilder()
      .getMany();

    return data;
  }


}
