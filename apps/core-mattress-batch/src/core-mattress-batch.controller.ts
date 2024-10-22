import { Controller, Get } from '@nestjs/common';
import { CoreMattressBatchService } from './core-mattress-batch.service';

@Controller()
export class CoreMattressBatchController {
  constructor(private readonly coreMattressBatchService: CoreMattressBatchService) {}

  @Get()
  getHello(): string {
    return this.coreMattressBatchService.getHello();
  }
}
