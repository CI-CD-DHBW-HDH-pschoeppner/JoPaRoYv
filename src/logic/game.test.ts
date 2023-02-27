import { hasWon } from './game';

describe('hasWon', () => {
  it('should return true when the first row is all PLAYER1 symbols', () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY,
    ];
    expect(hasWon(board, Field.PLAYER1)).toBe(true);
  });
  it('should return true when the second row is all PLAYER2 symbols', () => {
    const board: Field[] = [
      Field.EMPTY, 
      Field.EMPTY,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
    ];
    expect(hasWon(board, Field.PLAYER2)).toBe(true);
  });
  it('should return true when the third row is all PLAYER1 symbols', () => {
    const board: Field[] = [
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY,
      Field.PLAYER2,
      Field.EMPTY, 
      Field.EMPTY,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER1
    ];
    expect(hasWon(board, Field.PLAYER1)).toBe(true);
  });
  it('should return false', () => {
    const board: Field[] = [
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY,
      Field.PLAYER2,
      Field.EMPTY, 
      Field.EMPTY,
      Field.PLAYER1,
      Field.EMPTY,
      Field.PLAYER1
    ];
    expect(hasWon(board, Field.PLAYER1)).toBe(false);
  });
})

import { newBoard } from './game';

describe('newBoard', () => {
  it('should create a new board with all fields empty', () => {
    const expected: Field[] = [
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    const actual: Field[] = newBoard();
    expect(actual).toEqual(expected);
  });
});

import { getBlanks } from './game';

describe('getBlanks', () => {
  it('should return an array of empty field indices', () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER1,
      Field.EMPTY,
      Field.PLAYER2,
      Field.EMPTY,
    ];
    const expected: number[] = [1, 2, 4, 6];
    const actual: number[] = getBlanks(board);
    expect(actual).toEqual(expected);
  });

  it('should return an empty array if there are no empty fields', () => {
    const board: Field[] = [
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.PLAYER1,
    ];
    const expected: number[] = [];
    const actual: number[] = getBlanks(board);
    expect(actual).toEqual(expected);
  });
});


import { Field, invertPlayer } from "./game";

describe("invert player", () => {
  it("invert player1 to player2", () => {
    const result: Field = invertPlayer(Field.PLAYER1);
    expect(result).toBe(Field.PLAYER2);
  });
  it("invert player2 to player1", () => {
    const result: Field = invertPlayer(Field.PLAYER2);
    expect(result).toBe(Field.PLAYER1);
  });
  it("return empty field as empty", () => {
    const result: Field = invertPlayer(Field.EMPTY);
    expect(result).toBe(Field.EMPTY);
  });
});


import { isPlayer } from './game';

describe('isPlayer', () => {
  it('should return true for valid players', () => {
    expect(isPlayer(Field.PLAYER1)).toBe(true);
    expect(isPlayer(Field.PLAYER2)).toBe(true);
  });

  it('should return false for invalid players', () => {
    expect(isPlayer(Field.EMPTY)).toBe(false);
  });
});

