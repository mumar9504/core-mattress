import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreMattressBatchService {
  getHello(): string {
    return 'Welcome to CORE MATTRESS BATCH server!';
  }
}
