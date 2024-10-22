import { NestFactory } from '@nestjs/core';
import { CoreMattressBatchModule } from './core-mattress-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(CoreMattressBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
