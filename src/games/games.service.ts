import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { Game } from "./game.model";

@Injectable()
export class GamesService {
  private _games: Game[] = [
    {
      id: uuid(),
      name: "League of Legends"
    },
    {
      id: uuid(),
      name: "World of Warcraft"
    },
    {
      id: uuid(),
      name: "Call of Duty"
    }
  ];

  public getAllGames(): Game[] {
    return this._games;
  }
}
