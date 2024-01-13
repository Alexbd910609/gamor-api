import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { Player, PlayerPlatform } from "./player.model";
import { GetPlayersFilterDto } from "../dto/get-players-filter.dto";

@Injectable()
export class PlayersService {
  private _players: Player[] = [
    // Party League of Legends
    {
      id: uuid(),
      name: "Rairti",
      platform: PlayerPlatform.PARTY,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#62bd72",
        char: "R"
      }
    },
    {
      id: uuid(),
      name: "Kiacue",
      platform: PlayerPlatform.PARTY,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#390d0d",
        char: "K"
      }
    },
    {
      id: uuid(),
      name: "Wuefal",
      platform: PlayerPlatform.PARTY,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#83e151",
        char: "W"
      }
    },
    {
      id: uuid(),
      name: "Xuclus",
      platform: PlayerPlatform.PARTY,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#5346ee",
        char: "X"
      }
    },
    {
      id: uuid(),
      name: "Deumay",
      platform: PlayerPlatform.PARTY,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#6187bf",
        char: "D"
      }
    },
    {
      id: uuid(),
      name: "Cusaon",
      platform: PlayerPlatform.PARTY,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#c6466b",
        char: "C"
      }
    },
    // Party World of Warcraft
    {
      id: uuid(),
      name: "Platay",
      platform: PlayerPlatform.PARTY,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#1ce365",
        char: "P"
      }
    },
    {
      id: uuid(),
      name: "Zuhoan",
      platform: PlayerPlatform.PARTY,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#01aeb4",
        char: "Z"
      }
    },
    {
      id: uuid(),
      name: "Veruin",
      platform: PlayerPlatform.PARTY,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#8e2793",
        char: "V"
      }
    },
    {
      id: uuid(),
      name: "Paogyu",
      platform: PlayerPlatform.PARTY,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#7891f4",
        char: "P"
      }
    },
    {
      id: uuid(),
      name: "Bebuco",
      platform: PlayerPlatform.PARTY,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#5b961f",
        char: "B"
      }
    },
    {
      id: uuid(),
      name: "Hoevin",
      platform: PlayerPlatform.PARTY,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#80821c",
        char: "H"
      }
    },
    // Party Call of Duty
    {
      id: uuid(),
      name: "Kakawe",
      platform: PlayerPlatform.PARTY,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#6d5205",
        char: "K"
      }
    },
    {
      id: uuid(),
      name: "Poxuys",
      platform: PlayerPlatform.PARTY,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#d40b8c",
        char: "P"
      }
    },
    {
      id: uuid(),
      name: "Liluir",
      platform: PlayerPlatform.PARTY,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#ee07ed",
        char: "L"
      }
    },
    {
      id: uuid(),
      name: "Boxudu",
      platform: PlayerPlatform.PARTY,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#2ce83d",
        char: "B"
      }
    },
    {
      id: uuid(),
      name: "Vaihel",
      platform: PlayerPlatform.PARTY,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#6f1828",
        char: "V"
      }
    },
    {
      id: uuid(),
      name: "Kaihau",
      platform: PlayerPlatform.PARTY,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#ba30fc",
        char: "K"
      }
    },
    // Matches League of Legends
    {
      id: uuid(),
      name: "Ceuhiu",
      platform: PlayerPlatform.MATCHES,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#88e469",
        char: "C"
      }
    },
    {
      id: uuid(),
      name: "Gaiver",
      platform: PlayerPlatform.MATCHES,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#7344b5",
        char: "G"
      }
    },
    {
      id: uuid(),
      name: "Kuomal",
      platform: PlayerPlatform.MATCHES,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#819f96",
        char: "K"
      }
    },
    {
      id: uuid(),
      name: "Oscoho",
      platform: PlayerPlatform.MATCHES,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#61e795",
        char: "O"
      }
    },
    {
      id: uuid(),
      name: "Sicewa",
      platform: PlayerPlatform.MATCHES,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#06eb2d",
        char: "S"
      }
    },
    {
      id: uuid(),
      name: "Viecoa",
      platform: PlayerPlatform.MATCHES,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#4f9acd",
        char: "V"
      }
    },
    // Matches World of Warcraft
    {
      id: uuid(),
      name: "Veysea",
      platform: PlayerPlatform.MATCHES,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#62ce77",
        char: "V"
      }
    },
    {
      id: uuid(),
      name: "Laneol",
      platform: PlayerPlatform.MATCHES,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#4719b3",
        char: "L"
      }
    },
    {
      id: uuid(),
      name: "Ruadua",
      platform: PlayerPlatform.MATCHES,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#e597ab",
        char: "R"
      }
    },
    {
      id: uuid(),
      name: "Vionoy",
      platform: PlayerPlatform.MATCHES,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#d39829",
        char: "V"
      }
    },
    {
      id: uuid(),
      name: "Xubior",
      platform: PlayerPlatform.MATCHES,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#b79b77",
        char: "X"
      }
    },
    {
      id: uuid(),
      name: "Teucau",
      platform: PlayerPlatform.MATCHES,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#489cc5",
        char: "T"
      }
    },
    // Matches Call of Duty
    {
      id: uuid(),
      name: "Ryaurl",
      platform: PlayerPlatform.MATCHES,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#fc039a",
        char: "R"
      }
    },
    {
      id: uuid(),
      name: "Veroys",
      platform: PlayerPlatform.MATCHES,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#967cd7",
        char: "V"
      }
    },
    {
      id: uuid(),
      name: "Nokeis",
      platform: PlayerPlatform.MATCHES,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#661a6e",
        char: "N"
      }
    },
    {
      id: uuid(),
      name: "Veuhuy",
      platform: PlayerPlatform.MATCHES,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#39d2b4",
        char: "V"
      }
    },
    {
      id: uuid(),
      name: "Denial",
      platform: PlayerPlatform.MATCHES,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#2ecc73",
        char: "D"
      }
    },
    {
      id: uuid(),
      name: "Isgour",
      platform: PlayerPlatform.MATCHES,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#fcbc75",
        char: "I"
      }
    },
    // Streams League of Legends
    {
      id: uuid(),
      name: "Doukyu",
      platform: PlayerPlatform.STREAMS,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#db4ade",
        char: "D"
      }
    },
    {
      id: uuid(),
      name: "Rasoer",
      platform: PlayerPlatform.STREAMS,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#ab2310",
        char: "R"
      }
    },
    {
      id: uuid(),
      name: "Miefyu",
      platform: PlayerPlatform.STREAMS,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#3597a9",
        char: "M"
      }
    },
    {
      id: uuid(),
      name: "Labuen",
      platform: PlayerPlatform.STREAMS,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#5be5af",
        char: "L"
      }
    },
    {
      id: uuid(),
      name: "Osnihi",
      platform: PlayerPlatform.STREAMS,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#98c70c",
        char: "O"
      }
    },
    {
      id: uuid(),
      name: "Gozaxi",
      platform: PlayerPlatform.STREAMS,
      game: "League of Legends",
      joined: false,
      logo: {
        color: "#f735e1",
        char: "G"
      }
    },
    // Streams World of Warcraft
    {
      id: uuid(),
      name: "Miuvon",
      platform: PlayerPlatform.STREAMS,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#f8b15a",
        char: "M"
      }
    },
    {
      id: uuid(),
      name: "Usvuxe",
      platform: PlayerPlatform.STREAMS,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#28b702",
        char: "U"
      }
    },
    {
      id: uuid(),
      name: "Hoidoe",
      platform: PlayerPlatform.STREAMS,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#c3b607",
        char: "H"
      }
    },
    {
      id: uuid(),
      name: "Keaxyo",
      platform: PlayerPlatform.STREAMS,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#2d3e6e",
        char: "K"
      }
    },
    {
      id: uuid(),
      name: "Puowes",
      platform: PlayerPlatform.STREAMS,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#665015",
        char: "P"
      }
    },
    {
      id: uuid(),
      name: "Lezeil",
      platform: PlayerPlatform.STREAMS,
      game: "World of Warcraft",
      joined: false,
      logo: {
        color: "#c3f718",
        char: "L"
      }
    },
    // Streams Call of Duty
    {
      id: uuid(),
      name: "Weygus",
      platform: PlayerPlatform.STREAMS,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#387954",
        char: "W"
      }
    },
    {
      id: uuid(),
      name: "Ryorui",
      platform: PlayerPlatform.STREAMS,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#2e919d",
        char: "R"
      }
    },
    {
      id: uuid(),
      name: "Tikeva",
      platform: PlayerPlatform.STREAMS,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#09539f",
        char: "T"
      }
    },
    {
      id: uuid(),
      name: "Mutyal",
      platform: PlayerPlatform.STREAMS,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#1ff875",
        char: "M"
      }
    },
    {
      id: uuid(),
      name: "Hukyos",
      platform: PlayerPlatform.STREAMS,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#f3cea1",
        char: "H"
      }
    },
    {
      id: uuid(),
      name: "Miobuo",
      platform: PlayerPlatform.STREAMS,
      game: "Call of Duty",
      joined: false,
      logo: {
        color: "#f55798",
        char: "M"
      }
    }
  ];

  public getAllPlayers(): Player[] {
    return this._players;
  }

  public getPlayersWithFilters(getPlayersFilterDto: GetPlayersFilterDto): Player[] {
    const { platform, game } = getPlayersFilterDto;

    let players: Player[] = this.getAllPlayers();

    if (platform) {
      players = players.filter((player: Player): boolean => player.platform === platform);
    }

    if (game) {
      players = players.filter((player: Player): boolean => player.game === game);
    }

    return players;
  }
}