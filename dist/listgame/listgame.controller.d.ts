import { ListGameService } from './listgame.service';
import { ListGames } from './listgame.entity';
export declare class ListGameController {
    private listGamerService;
    constructor(listGamerService: ListGameService);
    getAllListGames(): Promise<ListGames[]>;
}
