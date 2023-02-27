import { Field, hasWon, isPlayer, Mode } from "../game";
import { easyMove } from "./easy";
import { hardMove } from "./hard";
import { mediumMove, pettyMove } from "./medium";

export interface BotMove {
  (board: Field[], own: Field): number;
}

// returns the appropriated function for the given mode
export function moveWithMode(mode: Mode): BotMove | undefined {
  switch (mode) {
    case Mode.EASY:
      return easyMove;
    case Mode.PETTY:
      return pettyMove;
    case Mode.MEDIUM:
      return mediumMove;
    case Mode.HARD:
      return hardMove;
    case Mode.HUMAN || Mode.ONLINE: // if both players are controlled by a human, returns undefined
      return undefined;
    default:
      return undefined;
  }
}

// winningMove returns:
// - the winning move for a given player
// - -1 if there is none
export function winningMove(board: Field[], player: Field): number {
  if (!isPlayer(player)) throw new Error(`Player ${player} is not valid`);

  for (let i = 0; i < board.length; i++) {
    if (board[i] !== Field.EMPTY) continue;

    const tmp = [...board];
    tmp[i] = player;

    if (hasWon(tmp, player)) return i;
  }

  return -1;
}

export function randomMove(bounds: number): number {
  return Math.floor(Math.random() * bounds);
}
