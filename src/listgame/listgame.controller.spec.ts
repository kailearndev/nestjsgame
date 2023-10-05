import { Test, TestingModule } from '@nestjs/testing';
import { ListgameController } from './listgame.controller';

describe('ListgameController', () => {
  let controller: ListgameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListgameController],
    }).compile();

    controller = module.get<ListgameController>(ListgameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
