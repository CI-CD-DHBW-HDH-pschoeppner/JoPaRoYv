import { Field } from "../game";
import { mediumMove } from "./medium";

describe("medium move", () => {
    var full_field: Field[] = [Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1]
    var winning_on_2:Field[] = [Field.PLAYER1, Field.PLAYER1, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY]
    var empty_field:Field[] = [Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY]
    it("return -1 if field is full", () => {
      const result : Number = mediumMove(full_field, Field.PLAYER1)
      expect(result).toBe(-1);
    });
    
    it("return winning move", () =>{
        const result:Number = mediumMove(winning_on_2, Field.PLAYER1)
        expect(result).toBe(2)
    })
    
    it("return petty move,", ()=> {
        const result:Number = mediumMove(winning_on_2, Field.PLAYER2)
        expect(result).toBe(2)
    })

    it("return middle field", () => {
        const result:Number = mediumMove(empty_field, Field.PLAYER1)
        expect(result).toBe(4)
    })
  });