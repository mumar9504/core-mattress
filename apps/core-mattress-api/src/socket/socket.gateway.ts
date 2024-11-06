import { Logger } from '@nestjs/common';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway({ transports: ['websocket'], secure: false })
export class SocketGateway implements OnGatewayInit {
	private logger: Logger = new Logger('SocketEventsGateway');
	private summaryClient: number = 0;

	public afterInit(server: Server) {
		this.logger.verbose(`WebSocket Server Initialized total: ${this.summaryClient}`);
	}

	handleConnection(client: WebSocket, ...args: any[]) {
		this.summaryClient++;
		this.logger.verbose(`== Client connected total: ${this.summaryClient} ==`);
	}

	handleDisconnect(client: WebSocket) {
		this.summaryClient--;
		this.logger.verbose(`== Client disconnected left total: ${this.summaryClient} ==`);
	}

	@SubscribeMessage('message')
	public handleMessage(client: WebSocket, payload: any): string {
		return 'Hello world!';
	}
}

/** 
MESSAGE TARGET:
1. Client (only client) => faqatgina clientni o'ziga
2. Broadcast (except client) => barcha clientlarga, lekin o'ziga emas 
3. Emit (all clients) => barcha clientlarga, shu jumladan o'ziga ham
**/
