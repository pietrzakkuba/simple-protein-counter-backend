import { Test, TestingModule } from '@nestjs/testing';
import { daysController } from './days.controller';
import { DaysService } from './days.service';

describe('DaysController', () => {
  let controller: daysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [daysController],
      providers: [DaysService],
    }).compile();

    controller = module.get<daysController>(daysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
