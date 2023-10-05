import { Test, TestingModule } from '@nestjs/testing';
import { ListgameService } from './listgame.service';

describe('ListgameService', () => {
  let service: ListgameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListgameService],
    }).compile();

    service = module.get<ListgameService>(ListgameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
