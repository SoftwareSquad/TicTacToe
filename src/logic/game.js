/**
 * Determins who's turn it is
 * Holds the game status
 */

//game status
var gameStatus = [
    ['','',''],
    ['','',''],
    ['','','']
];

//either X or O
var currentPlayer = 'X';

//changes a single cell in the grid
module.exports.changeCell = function(x, y){
    gameStatus[y][x] = currentPlayer;
    currentPlayer = this.changePlayer(currentPlayer);
    return gameStatus;
}

//changes the current player
module.exports.changePlayer = function(player){    
    return (player == 'X')?'O':'X';
}
