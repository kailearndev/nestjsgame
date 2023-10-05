import { ListGameService } from './listgame.service';
import { Controller, Get } from '@nestjs/common';
import { ListGames } from './listgame.entity';

@Controller('listgames')
export class ListGameController {
  constructor(private listGamerService: ListGameService) {}
  @Get()
  async getAllListGames(): Promise<ListGames[]> {
    return await this.listGamerService.getAllListGames();
  }
}
