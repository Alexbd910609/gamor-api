import { Controller, Get, Query } from "@nestjs/common";
import { PlayersService } from "./players.service";
import { GetPlayersFilterDto } from "../dto/get-players-filter.dto";
import { Player } from "./player.model";

@Controller('players')
export class PlayersController {
  constructor(private _playersService: PlayersService) {
  }

  @Get()
  public getTasks(@Query() getPlayersFilterDto: GetPlayersFilterDto): Player[] {
    if (Object.keys(getPlayersFilterDto).length) {
      return this._playersService.getPlayersWithFilters(getPlayersFilterDto);
    } else {
      return this._playersService.getAllPlayers();
    }
  }
}
