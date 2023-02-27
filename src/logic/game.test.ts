import { Field, Game, invertPlayer, isFull, Mode, Outcome, Player, won } from './game';
import { moveWithMode } from './bots/bot';

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

describe("Player, add win", () => {
  it("add win", () => {
    const player = new Player(Field.PLAYER1);
    player.addWin();
    expect(player.score).toBe(1);
  });
});

describe("Player, is Human", () => {
  it("player is human", () => {
    const player = new Player(Field.PLAYER1);
    expect(player.isHuman()).toBe(true);
  });
  it("player is bot", () => {
    const player = new Player(Field.PLAYER1);
    player.botMove = moveWithMode(Mode.EASY);
    expect(player.isHuman()).toBe(false);
  });
});

describe("Player, move", () => {
  it("player is human", () => {
    let field: Field[] = [0,0,0,0];
    const player = new Player(Field.PLAYER1);
    expect(player.move(field)).toBe(-1);
  });
  it("player is bot", () => {
    let field: Field[] = [0,0,0,0];
    const player = new Player(Field.PLAYER1);
    player.botMove = moveWithMode(Mode.EASY);
    expect(player.move(field)).not.toBe(-1);
  });
});

describe("Game, add win", () => {
  it("add win to player", () => {
    const game = new Game();
    game.addWin(Field.PLAYER1);
    expect(game.player.score).toBe(1);
    expect(game.enemy.score).toBe(0);
  });
  it("add win to enemy", () => {
    const game = new Game();
    game.addWin(Field.PLAYER2);
    expect(game.player.score).toBe(0);
    expect(game.enemy.score).toBe(1);
  });
});

describe("Game, switch sides", () => {
  it("switch sides", () => {
    const game = new Game();
    game.addWin(Field.PLAYER2);
    expect(game.player.botMove).toBe(undefined);
    expect(game.enemy.botMove).not.toBe(undefined);
    expect(game.player.score).toBe(0);
    expect(game.enemy.score).toBe(1);
    game.switchSides();
    expect(game.player.botMove).not.toBe(undefined);
    expect(game.enemy.botMove).toBe(undefined);
    expect(game.player.score).toBe(1);
    expect(game.enemy.score).toBe(0);
  });
});

describe("Game, update mode", () => {
  it("simple mode update", () => {
    const game = new Game();
    expect(game.mode).toBe(Mode.EASY);
    game.updateMode(Mode.MEDIUM);
    expect(game.mode).toBe(Mode.MEDIUM);
    game.updateMode(Mode.HARD);
    expect(game.mode).toBe(Mode.HARD);
    game.updateMode(Mode.EASY);
    expect(game.mode).toBe(Mode.EASY);
    game.updateMode(Mode.HUMAN);
    expect(game.mode).toBe(Mode.HUMAN);
    game.updateMode(Mode.ONLINE);
    expect(game.mode).toBe(Mode.ONLINE);
  });
  it("player and enemy are human, but mode is not human", () => {
    const game = new Game();
    game.enemy.botMove = undefined;
    expect(game.player.isHuman()).toBe(true);
    expect(game.enemy.isHuman()).toBe(true);
    expect(game.mode).not.toBe(Mode.HUMAN);
    game.updateMode(Mode.MEDIUM);
    expect(game.enemy.botMove).not.toBe(undefined);
    expect(game.mode).toBe(Mode.MEDIUM);
  });
  it("player and enemy are not human", () => {
    const game = new Game();
    game.player.botMove = moveWithMode(Mode.EASY);
    expect(game.player.isHuman()).toBe(false);
    expect(game.enemy.isHuman()).toBe(false);
    game.updateMode(Mode.MEDIUM);
    expect(game.mode).toBe(Mode.MEDIUM);
    expect(game.player.botMove).not.toBe(undefined);
    expect(game.enemy.botMove).not.toBe(undefined);
  });
});

describe("Outcome, is draw", () => {
  it("is draw", () => {
    let board: Field[] = [0,0,0,0];
    const outcome = new Outcome(board);
    outcome.finished = true;
    outcome.winner = Field.EMPTY;
    expect(outcome.isDraw()).toBe(true);
    outcome.winner = Field.PLAYER1;
    expect(outcome.isDraw()).toBe(false);
  });
});

describe("is full", () => {
  it("is full", () => {
    let board: Field[] = [1,1,2,2];
    expect(isFull(board)).toBe(true);
  });
  it("is not full", () => {
    let board: Field[] = [1,1,0,2];
    expect(isFull(board)).toBe(false);
  });
});

describe("won", () => {
  it("player 1 won", () => {
    let board: Field[] = [1,1,1];
    expect(won(board)).toBe(1);
  });
  it("player 1 won", () => {
    let board: Field[] = [2,2,2];
    expect(won(board)).toBe(2);
  });
  it("no winner", () => {
    let board: Field[] = [0,0,0];
    expect(won(board)).toBe(0);
  });
});