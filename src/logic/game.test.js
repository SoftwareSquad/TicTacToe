const game = require("./game");
 it("should return the game status", () => {
    expect(game.changeCell(0,0)).toMatchObject([
        ['X','',''],
        ['','',''],
        ['','','']
    ]);
});
