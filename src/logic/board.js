const game = require("./game");

<<<<<<< HEAD
(() => {
    var playerOne = 'X';
    var playerTwo = 'Y';
    var currentPlayer = playerOne;
    var scoreForPlayer1 = 0;
    var scoreForPlayer2 = 0;
    var resetButton = document.getElementById('reset-button');
    var cellsListener = document.getElementById('cell');

    function setText(msg) {
        document.getElementById("message").innerText = msg;
    }
})();
=======
let state;
let hasWon;
let counter;

function init() {
    var classname = document.getElementsByClassName("cell");
    className.forEach(function (element) {
        element.addEventListener('click', checkClick);
    });
    state = [];
    hasWon = false;
    counter = 0;
}

const checkClick = (event) => {
    const id = event.id;
    getCoords(string);
}

modules.export.getCoords = function(string){
    let x = string.substring(1, 2);
    let y = string.substring(3, 4);

    return [x, y];
}

function checkForWinner() {
    state = game.changeCell(x, y);
    hasWon = game.hasWon();
    if (hasWon[0] && hasWon[1]) {
        alert('It´s a draw!');
    }
    else if (hasWon[0] || hasWon[1]) {
        alert('Congradulations you won!');
    }
    else {
        alert('You lost!');
    }
}

function resetGame() {
    game.reset();
    init();
}

>>>>>>> 8091adc3fdc167c12ce17b8ca77f391bae96fea2
