import { Moves } from "../types/parsePgn";

function parsePgn(pgn: string): Moves {
    pgn = "[Event \"Let's Play!\"]\n[Site \"Chess.com\"]\n[Date \"2017.03.20\"]\n[Round \"-\"]\n[White \"FuzzyLogic12\"]\n[Black \"JRT829\"]\n[Result \"0-1\"]\n[CurrentPosition \"r1b2b1r/1p3p2/2pk3p/1p3R2/2pP1Np1/N7/PP3PPP/R1B1q1K1 w - - 3 20\"]\n[Timezone \"UTC\"]\n[ECO \"B00\"]\n[ECOUrl \"https://www.chess.com/openings/Nimzowitsch-Defense-Declined-Franco-Nimzowitsch-Variation\"]\n[UTCDate \"2017.03.20\"]\n[UTCTime \"03:33:36\"]\n[WhiteElo \"1000\"]\n[BlackElo \"923\"]\n[TimeControl \"1/259200\"]\n[Termination \"JRT829 won by checkmate\"]\n[StartTime \"03:33:36\"]\n[EndDate \"2017.03.20\"]\n[EndTime \"03:44:26\"]\n[Link \"https://www.chess.com/game/daily/160574782\"]\n\n1. e4 e6 2. Nf3 Nc6 3. Bb5 a6 4. Ng5 axb5 5. O-O h6 6. Nh3 d5 7. exd5 exd5 8. Re1+ Kd7 9. Re3 g5 10. Qe2 Nd4 11. c3 Nxe2+ 12. Rxe2 g4 13. Na3 c6 14. d4 Kd6 15. c4 dxc4 16. Re5 Ne7 17. Rh5 Nf5 18. Rxf5 Qe8 19. Nf4 Qe1# 0-1\n"
    let moves: Moves = []
    const splitPgn = pgn.split("\n\n");

    if (splitPgn == undefined || splitPgn.length < 2) {
        console.error("Invalid PGN")
        return moves;
    }

    pgn = splitPgn.at(-1) as string;

    let pgnMoves = pgn.split(/\d+\./).slice(1) // split on all places with a number followed by a dot
    for (const pgnMove in pgnMoves) {
        let tmpMoves = pgnMoves[pgnMove].trim().split(" ")
        moves.push(tmpMoves[0])
        moves.push(tmpMoves[1])
    }
    return moves
}

export { parsePgn };