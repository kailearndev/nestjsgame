import { Repository } from 'typeorm';
import { ListGames } from './listgame.entity';
export declare class ListGameService {
    private listGameRepository;
    constructor(listGameRepository: Repository<ListGames>);
    getAllListGames(): Promise<ListGames[]>;
    getGameById(id: number): Promise<ListGames>;
    deleteGame(id: number): Promise<void>;
}
