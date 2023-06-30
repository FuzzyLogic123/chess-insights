
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

type Games = {
    games: Game[];
};


export { Games, Game, Player, Archives }