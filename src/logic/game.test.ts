import { Field, Game, invertPlayer, Mode, Player } from './game';
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
});