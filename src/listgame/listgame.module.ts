import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListGameController } from './listgame.controller';
import { ListGames } from './listgame.entity';
import { ListGameService } from './listgame.service';

@Module({
  imports: [TypeOrmModule.forFeature([ListGames])],
  providers: [ListGameService],
  exports: [ListGameService],
  controllers: [ListGameController],
})
export class ListgameModule {}
