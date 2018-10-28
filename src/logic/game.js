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
module.exports.player = function(){
    return currentPlayer;
}

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

//checks if anyone has won
//returns [true,false] if X won else [false,true] if O won
//returns [true, true] if draw
module.exports.hasWon = function(){
    //all possible winning permuations
    var possibilaties = [
        //diagonal
        [[0,0], [1,1], [2,2]], 
        [[2,0], [1,1], [0,2]],
        //vertical
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        //horizontal
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]]
    ];

    if(checkForDraw(gameStatus)){
        return [true, true];
    }

    return [checkForPossibilities(possibilaties, 'X'),checkForPossibilities(possibilaties, 'O')];
}

//resets the game status
module.exports.reset = function(){
    gameStatus = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    currentPlayer = 'X';
}

//checks if game is a draw
function checkForDraw(status){
    var num = 0;

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            if(status[i][j] != '')
                num++;
        }
    }

    if(num == 9)
        return true;
    return false;
}

function checkForPossibilities(possibilaties, player){
    for(var i = 0; i < possibilaties.length; i++){
        var foundPossiblity = true;

        for(var j = 0; j < possibilaties[i].length; j++){
            var x = possibilaties[i][j][0];
            var y = possibilaties[i][j][1];

            if(gameStatus[x][y] != player)
                    foundPossiblity = false;
        }

        if(foundPossiblity)
            return true;
    }

    return false;
} 