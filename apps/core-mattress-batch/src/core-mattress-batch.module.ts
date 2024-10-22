import { Module } from '@nestjs/common';
import { CoreMattressBatchController } from './core-mattress-batch.controller';
import { CoreMattressBatchService } from './core-mattress-batch.service';

@Module({
  imports: [],
  controllers: [CoreMattressBatchController],
  providers: [CoreMattressBatchService],
})
export class CoreMattressBatchModule {}
