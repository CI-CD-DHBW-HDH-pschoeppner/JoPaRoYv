import { Field, invertPlayer, isPlayer, Mode } from "../game";
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

  player = invertPlayer(player);

  console.log(player, board);

  // horicontally
  for (let i = 0; i < 3; i++) {
    let offset = i * 3;
    const row = board.slice(offset, offset + 3);

    if (row.filter((r) => r === Field.EMPTY).length !== 1) continue;

    const count = row.filter((r) => r === player).length;
    if (count == 2) return offset + row.indexOf(Field.EMPTY);
  }

  // vertically
  for (let i = 0; i < 3; i++) {
    const row = [board[i], board[i + 3], board[i + 6]];

    if (row.filter((r) => r === Field.EMPTY).length !== 1) continue;

    const count = row.filter((r) => r === player).length;
    if (count == 2) return row.indexOf(Field.EMPTY) * 3 + i;
  }

  return -1;
}

export function randomMove(bounds: number): number {
  return Math.floor(Math.random() * bounds);
}
