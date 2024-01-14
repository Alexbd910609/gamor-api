import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PlayersModule, GamesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
