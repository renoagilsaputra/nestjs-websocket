import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class TodoGateway {

  @WebSocketServer()
  server: Server;

  constructor(private readonly todoService: TodoService) { }

  @SubscribeMessage('kirim')
  async createData(
      @MessageBody() createTodoDto: CreateTodoDto,
      ) {
        
    const data = await this.todoService.create(createTodoDto);
    // Mengirim ke semua client
    this.server.emit('pesan-balasan', data);
   
    return data;
  }

  @SubscribeMessage('pesan')
  async handleData() {
    const data = await this.todoService.findAll();
    return data;
  }




}
