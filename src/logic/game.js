/**
 * Determins who's turn it is
 * Holds the game status
 */
var gameStatus = [
    ['','',''],
    ['','',''],
    ['','','']
];
 //either X or O
var currentPlayer = 'X';
module.exports.changeCell = function(x, y){
    gameStatus[x][y] = currentPlayer;
    return gameStatus;
}