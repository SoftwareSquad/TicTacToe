const game = require("./game");

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
});

it("should return the game status", () => {
    expect(game.changePlayer('X')).toBe('O');
    expect(game.changePlayer('O')).toBe('X');
});