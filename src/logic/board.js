const game = require("./game");

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

module.exports.getCoords = function(string){
    let x = parseInt(string.substring(1, 2));
    let y = parseInt(string.substring(3, 4));

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

