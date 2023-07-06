
type Archives = {
    archives: string[]
}

interface Game {
    url: string;
    pgn: string;
    time_control: string;
    end_time: number;
    rated: boolean;
    tcn: string;
    uuid: string;
    initial_setup: string;
    fen: string;
    start_time: number;
    time_class: string;
    rules: string;
    white: Player;
    black: Player;
    moves: Moves;
}

interface Player {
    rating: number;
    result: string;
    "@id": string;
    username: string;
    uuid: string;
}

interface PlayerInfo {
    avatar?: string;
    player_id: number;
    "@id": string;
    url: string;
    name?: string;
    username: string;
    followers: number;
    country: string;
    last_online: number;
    joined: number;
    status: string;
    is_streamer: boolean;
    verified: boolean;
    league: string;
    title?: string;
  }

type Games = {
    games: Game[];
};




export { Games, Game, Player, Archives, PlayerInfo }