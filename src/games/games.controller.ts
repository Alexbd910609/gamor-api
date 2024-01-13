import { Controller, Get } from "@nestjs/common";
import { GamesService } from "./games.service";
import { Game } from "./game.model";

@Controller("games")
export class GamesController {
  constructor(private _gamesService: GamesService) {
  }

  @Get()
  public getTasks(): Game[] {
    return this._gamesService.getAllGames();
  }
}
