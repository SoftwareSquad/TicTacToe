const game = require("./game");


let state;
let hasWon;
let playerO = 0;
let playerX = 0;

var initFunc = {};

//Makes a new table
initFunc.init = function () {
    $('.overlay').hide();

    $(".cell").bind("click", checkClick);
    $(".game-text").text("");
    $("#player-turn").text(game.player());
    state = state = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']];
    hasWon = false;
    counter = 0;
}

module.exports.init = initFunc.init;

//Listens after a click from the table, gets correct coordinates 
//and inserts correct player(id) and calls check for winner
const checkClick = (event) => {
    const id = event.target.id;
    var coords = this.getCoords(id);

    console.log(state);
    console.log(coords[1] + ", " + coords[0]);

    try {
        if (state[coords[1]][coords[0]] != "") {
            //alreadyClicked();
            return;
        }

        insertPlayers(id);
        state = game.changeCell(coords[0], coords[1]);
        $("#player-turn").text(game.player());
        checkForWinner();
    }
    catch (e) {
        console.log(e);
        //alreadyClicked();
        return;
    }
}

function alreadyClicked() {
    alert('Please choose another rate');
}

//Gets the coordinates from a cell from each id
module.exports.getCoords = function (string) {
    let x = parseInt(string.substring(1, 2)) - 1;
    let y = parseInt(string.substring(3, 4)) - 1;

    return [x, y];
}

//Inserts X or O into the table
function insertPlayers(id) {
    $("#" + id + " .game-text").text(game.player());
}

//Checks if someone won the game - calls hasWon from game.js
function checkForWinner() {
    hasWon = game.hasWon();
    if (hasWon[0] && hasWon[1]) {
        $('#winner').text("The Winner Is: No one, it's a draw");
        $('.overlay').show();
        
        $('.overlay').fadeIn();
        $('.overlay').fadeIn();
        $('.btn-play-again').click(function () {
            resetGame();
            $('.overlay').fadeOut();
            $('.overlay').hide();
            return;
        });
    }
    else if (hasWon[0] || hasWon[1]) {
        playerX = (hasWon[0]) ? playerX + 1 : playerX;
        playerO = (hasWon[1]) ? playerO + 1 : playerO;
        var winner = (game.player() == 'X')?'O':'X';


        $('#winner').text("The Winner Is: " + winner);
        $('.overlay').show();
        $('.overlay').fadeIn();

        
        $('.btn-play-again').click(function () {
            resetGame();
            $('.overlay').fadeOut();
            $('.overlay').hide();
            return;
        });
    }
}

//Resets the game afer someone won
function resetGame() {
    game.reset();
    initFunc.init();

    $("#x-score").text(playerX);
    $("#o-score").text(playerO);
}