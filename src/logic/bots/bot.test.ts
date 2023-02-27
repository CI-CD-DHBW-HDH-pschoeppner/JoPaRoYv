import { Field, Mode } from "../game";
import { moveWithMode, winningMove, randomMove } from "./bot";
import { easyMove } from "./easy";
import { hardMove } from "./hard";
import { mediumMove, pettyMove } from "./medium";

const boards = [
  [
    Field.EMPTY, // _ _ _
    Field.EMPTY, // _ _ _
    Field.EMPTY, // _ _ _
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.PLAYER1, // O _ O
    Field.EMPTY, // _ _ _
    Field.PLAYER1, // _ _ _
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.PLAYER1, // O _ _
    Field.EMPTY, // O _ _
    Field.EMPTY, // _ _ _
    Field.PLAYER1,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY, // _ _ _
    Field.EMPTY, // _ _ _
    Field.EMPTY, // _ _ _
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.PLAYER2, // X _ X
    Field.EMPTY, // _ _ _
    Field.PLAYER2, // _ _ _
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.PLAYER2, // X _ _
    Field.EMPTY, // X _ _
    Field.EMPTY, // _ _ _
    Field.PLAYER2,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
];

describe("get winning move", () => {
  it("should return the correct index", () => {
    expect(winningMove(boards[0], Field.PLAYER1)).toBe(-1);
    expect(winningMove(boards[1], Field.PLAYER1)).toBe(1);
    expect(winningMove(boards[2], Field.PLAYER1)).toBe(6);
    expect(winningMove(boards[3], Field.PLAYER2)).toBe(-1);
    expect(winningMove(boards[4], Field.PLAYER2)).toBe(1);
    expect(winningMove(boards[5], Field.PLAYER2)).toBe(6);
  });
});

describe("get random", () => {
  it("should be within constraints", () => {
    for (let i = 0; i <= 1000; i++) {
      const rand = randomMove(1);
      expect(rand).toBeGreaterThanOrEqual(0);
      expect(rand).toBeLessThan(1);
    }
  });
});

describe("move with Node", () => {
  it("should return the correct function", () => {
    expect(moveWithMode(Mode.EASY)).toBe(easyMove);
    expect(moveWithMode(Mode.PETTY)).toBe(pettyMove);
    expect(moveWithMode(Mode.HARD)).toBe(hardMove);
    expect(moveWithMode(Mode.MEDIUM)).toBe(mediumMove);
    expect(moveWithMode(Mode.HUMAN)).toBe(undefined);
    expect(moveWithMode(Mode.ONLINE)).toBe(undefined);
  });
});
