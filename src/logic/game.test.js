
const game = require("./game");

it("should return if someone won", () => {
    expect(game.hasWon()).toMatchObject([false,false]);
});

it("should return the game status", () => {
    expect(game.changeCell(0,0)).toMatchObject([
        ['X','',''],
        ['','',''],
        ['','','']
    ]);
    expect(game.changeCell(1,0)).toMatchObject([
        ['X','O',''],
        ['','',''],
        ['','','']
    ]);
    expect(game.changeCell(0,1)).toMatchObject([
        ['X','O',''],
        ['X','',''],
        ['','','']
    ]);
    expect(game.changeCell(1,1)).toMatchObject([
        ['X','O',''],
        ['X','O',''],
        ['','','']
    ]);
    expect(game.changeCell(0,2)).toMatchObject([
        ['X','O',''],
        ['X','O',''],
        ['X','','']
    ]);
});

//remember to test if won


test("resetting the game", () => {
    game.reset();
});

it("should return the game status", () => {
    expect(game.changeCell(0,0)).toMatchObject([
        ['X','',''],
        ['','',''],
        ['','','']
    ]);
    expect(game.changeCell(1,0)).toMatchObject([
        ['X','O',''],
        ['','',''],
        ['','','']
    ]);
    expect(game.changeCell(0,1)).toMatchObject([
        ['X','O',''],
        ['X','',''],
        ['','','']
    ]);
    expect(game.changeCell(1,1)).toMatchObject([
        ['X','O',''],
        ['X','O',''],
        ['','','']
    ]);
    expect(game.changeCell(2,0)).toMatchObject([
        ['X','O','X'],
        ['X','O',''],
        ['','','']
    ]);
    expect(game.changeCell(0,2)).toMatchObject([
        ['X','O','X'],
        ['X','O',''],
        ['O','','']
    ]);
});



it("should return the current player", () => {
    expect(game.changePlayer('X')).toBe('O');
    expect(game.changePlayer('O')).toBe('X');
});