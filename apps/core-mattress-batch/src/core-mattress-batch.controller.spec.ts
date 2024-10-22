import { Test, TestingModule } from '@nestjs/testing';
import { CoreMattressBatchController } from './core-mattress-batch.controller';
import { CoreMattressBatchService } from './core-mattress-batch.service';

describe('CoreMattressBatchController', () => {
  let coreMattressBatchController: CoreMattressBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CoreMattressBatchController],
      providers: [CoreMattressBatchService],
    }).compile();

    coreMattressBatchController = app.get<CoreMattressBatchController>(CoreMattressBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(coreMattressBatchController.getHello()).toBe('Hello World!');
    });
  });
});
