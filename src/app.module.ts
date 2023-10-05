import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListGameController } from './listgame/listgame.controller';
// import { ListGameService } from './listgame/listgame.service';
import { ListgameModule } from './listgame/listgame.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './typeorm-config/typeormConfig';

@Module({
  imports: [ListgameModule, TypeOrmModule.forRoot(typeormConfig)],
  controllers: [AppController, ListGameController],
  providers: [AppService],
})
export class AppModule {}
