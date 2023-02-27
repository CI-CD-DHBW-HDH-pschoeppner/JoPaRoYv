import { Field } from "../game";
import { mediumMove } from "./medium";

describe("medium move", () => {
    const full_field: Field[] = [Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1]
    const winning_on_2:Field[] = [Field.PLAYER1, Field.PLAYER1, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY]
    const empty_field:Field[] = [Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY]
    it("return -1 if field is full", () => {
      const result : number = mediumMove(full_field, Field.PLAYER1)
      expect(result).toBe(-1);
    });
    
    it("return winning move", () =>{
        const result:number = mediumMove(winning_on_2, Field.PLAYER1)
        expect(result).toBe(2)
    })
    
    it("return petty move,", ()=> {
        const result:number = mediumMove(winning_on_2, Field.PLAYER2)
        expect(result).toBe(2)
    })

    it("return middle field", () => {
        const result:number = mediumMove(empty_field, Field.PLAYER1)
        expect(result).toBe(4)
    })
  });

  describe("petty move", () => {
    const full_field: Field[] = [Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1, Field.PLAYER1]
    const winning_on_2:Field[] = [Field.PLAYER1, Field.PLAYER1, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY]
    it("return -1 if field is full", () => {
        const result : number = mediumMove(full_field, Field.PLAYER1)
        expect(result).toBe(-1);
      });
      
      it("return petty move,", ()=> {
          const result:number = mediumMove(winning_on_2, Field.PLAYER2)
          expect(result).toBe(2)
      })
  })

  describe("try petty move", ()=> {
    const winning_on_2:Field[] = [Field.PLAYER1, Field.PLAYER1, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY]
    it("return petty move,", ()=> {
        const result:number = mediumMove(winning_on_2, Field.PLAYER2)
        expect(result).toBe(2)
    })
  })