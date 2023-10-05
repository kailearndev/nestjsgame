import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListGames } from './listgame.entity';

@Injectable()
export class ListGameService {
  constructor(
    @InjectRepository(ListGames)
    private listGameRepository: Repository<ListGames>, // @InjectRepository(User)
  ) {}
  async getAllListGames(): Promise<ListGames[]> {
    return await this.listGameRepository.find({
      order: {
        name: 'DESC',
      },
    });
  }
  async getGameById(id: number): Promise<ListGames> {
    return await this.listGameRepository.findOne({
      where: { id },
    });
  }
  //   async createDate(day: CreateDayDto, user: User): Promise<Day> {
  //     const newDate = await this.listGameRepository.save(day);
  //     user.day.push(newDate);
  //     await this.userRepository.save(user);
  //     return newDate;
  //   }
  //   async updateDate(id: number, day: CreateDayDto): Promise<Day> {
  //     await this.listGameRepository.update(id, day);
  //     return await this.listGameRepository.findOne({
  //       where: { id },
  //     });
  //   }
  async deleteGame(id: number): Promise<void> {
    await this.listGameRepository.delete(id);
  }
}
