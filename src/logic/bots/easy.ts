import { Field } from "../game";
import { randomMove, winningMove } from "./bot";

// the easy bot:
// - chooses the winning move, if it can win
// - chooses a random move otherwise
export function easyMove(board: Field[], own: Field): number {
    const isFull = (currentValue: Field) => currentValue != Field.EMPTY
    if(board.every(isFull)){
        return -1
    }
    if(winningMove(board, own) == -1){
        do{
            var move = randomMove(board.length)
        }while(board[move] != Field.EMPTY)
        return move
    }
  return winningMove(board, own)
}
