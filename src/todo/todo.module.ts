import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoGateway } from './todo.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo])
  ],
  providers: [TodoGateway, TodoService]
})
export class TodoModule { }
