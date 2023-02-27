import { Field } from "../game";
import { randomMove, winningMove } from "./bot";

// the medium bot:
// - chooses the winning move, if it can win
// - blocks the player from winning, if it can
// - chooses the middle (4) field, if it can
// - chooses a random move otherwise
export function mediumMove(board: Field[], own: Field): number {
  return -1 // TODO: implement
}

// this bot:
// - blocks the player from winning, if it can
// - chooses a random move otherwise
export function pettyMove(board: Field[], own: Field): number {
    const isFull = (currentValue: Field) => currentValue != Field.EMPTY
    if(board.every(isFull)){
        return -1
    }
    var enemy = (own==Field.PLAYER1)?Field.PLAYER1:Field.PLAYER2
    if(winningMove(board, enemy) != -1){
        return winningMove(board, enemy)
    } else{
        do{
            var move = randomMove(board.length)
        }while(board[move] != Field.EMPTY)
        return move
    }
}
