import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './libs/interceptor/Logging.interceptor';
import { graphqlUploadExpress } from 'graphql-upload';
import * as express from 'express';
import * as cors from 'cors';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	
	// Global sozlamalar
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new LoggingInterceptor());
	
	// GraphQL fayl yuklash uchun middleware
	app.use(graphqlUploadExpress({ maxFileSize: 15000000, maxFiles: 10 }));
	
	// Statik fayllar uchun yo‘l
	app.use('/uploads', express.static('./uploads'));

	// CORS ni dinamik IP va localhost uchun sozlash
	const allowedOrigins = ['http://localhost:3000', 'http://172.30.1.91:3000'];
	app.use(cors({
		origin: function (origin, callback) {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true); // Ruxsat berilgan
			} else {
				callback(new Error('CORS policy blocked this request'));
			}
		},
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization']
	}));

	// WebSocket Adapter
	app.useWebSocketAdapter(new WsAdapter(app));

	// Server portini o‘rnatish
	await app.listen(process.env.PORT_API ?? 3010);
	console.log(`Server running on: http://localhost:${process.env.PORT_API ?? 3010}`);
}
bootstrap();


















// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import { LoggingInterceptor } from './libs/interceptor/Logging.interceptor';
// import { graphqlUploadExpress } from 'graphql-upload';
// import * as express from 'express';
// import * as cors from 'cors';
// import { WsAdapter } from '@nestjs/platform-ws';

// async function bootstrap() {
// 	const app = await NestFactory.create(AppModule);
// 	app.useGlobalPipes(new ValidationPipe());
// 	app.useGlobalInterceptors(new LoggingInterceptor());
// 	//app.enableCors({ origin: 'true', credentials: true });

// 	app.use(graphqlUploadExpress({ maxFileSize: 15000000, maxFiles: 10 }));
// 	app.use('/uploads', express.static('./uploads'));

// 	app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// 	app.useWebSocketAdapter(new WsAdapter(app));
// 	await app.listen(process.env.PORT_API ?? 3000);
// }
// bootstrap();
