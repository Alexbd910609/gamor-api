import { PlayerPlatform } from "../players/player.model";

export class GetPlayersFilterDto {
  platform?: PlayerPlatform;
  game?: string;
}