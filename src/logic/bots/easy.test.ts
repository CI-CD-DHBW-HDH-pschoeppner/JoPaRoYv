import { Field } from "../game";
import { easyMove } from "./easy";

describe("easy move", () => {
    const full_field: Field[] = [Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1]
    const winning_on_2:Field[] = [Field.PLAYER1, Field.PLAYER1, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY]
    it("return -1 if field is full", () => {
      const result : number = easyMove(full_field, Field.PLAYER1)
      expect(result).toBe(-1);
    });
    
    it("return winning move", () =>{
        const result:number = easyMove(winning_on_2, Field.PLAYER1)
        expect(result).toBe(2)
    })
    
  });