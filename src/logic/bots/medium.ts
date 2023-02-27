import { Field, invertPlayer } from "../game";
import { randomMove, winningMove } from "../bots/bot";

// the medium bot:
// - chooses the winning move, if it can win
// - blocks the player from winning, if it can
// - chooses the middle (4) field, if it can
// - chooses a random move otherwise
export function mediumMove(board: Field[], own: Field): number {
  const isFull = (currentValue: Field) => currentValue != Field.EMPTY;
  if (board.every(isFull)) {
    return -1;
  }
  if (winningMove(board, own) != -1) {
    return winningMove(board, own);
  }
  if (tryPettyMove(board, own) != -1) {
    return tryPettyMove(board, own);
  }
  if (board[4] == Field.EMPTY) {
    return 4;
  }
  let move:number
  do {
    move = randomMove(board.length);
  } while (board[move] != Field.EMPTY);
  return move;
}

// this bot:
// - blocks the player from winning, if it can
// - chooses a random move otherwise
export function pettyMove(board: Field[], own: Field): number {
  const isFull = (currentValue: Field) => currentValue != Field.EMPTY;
  if (board.every(isFull)) {
    return -1;
  }
  const enemy = invertPlayer(own);
  if (winningMove(board, enemy) != -1) {
    return winningMove(board, enemy);
  } else {
    let move: number
    do {
      move = randomMove(board.length);
    } while (board[move] != Field.EMPTY);
    return move;
  }
}

export function tryPettyMove(board: Field[], own: Field): number {
  const isFull = (currentValue: Field) => currentValue != Field.EMPTY;

  if (board.every(isFull)) {
    return -1;
  }
  const enemy = invertPlayer(own);

  if (winningMove(board, enemy) != -1) {
    return winningMove(board, enemy);
  }

  return -1;
}
