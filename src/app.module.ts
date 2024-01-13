import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [PlayersModule, GamesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
