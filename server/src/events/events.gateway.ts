import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newUser')
  handleNewUser(client:Socket, data:string) {
    console.log(data)
  }
  @SubscribeMessage('message')
  handleMessage(client: Socket, data: string) {
    console.log(data);
    this.server.emit('message', data + Date.now());
  }
}
