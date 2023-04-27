import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@WebSocketGateway()
export class TodoGateway {
  constructor(private readonly todoService: TodoService) { }

  @SubscribeMessage('createTodo')
  create(@MessageBody() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @SubscribeMessage('findAllTodo')
  findAll() {
    return this.todoService.findAll();
  }


}
