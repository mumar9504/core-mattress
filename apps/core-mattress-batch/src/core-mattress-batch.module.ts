import { Module } from '@nestjs/common';
import { CoreMattressBatchController } from './core-mattress-batch.controller';
import { CoreMattressBatchService } from './core-mattress-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CoreMattressBatchController],
  providers: [CoreMattressBatchService],
})
export class CoreMattressBatchModule {}
