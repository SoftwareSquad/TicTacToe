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
    let x = id.substring(1, 2);
    let y = id.substring(3, 4);
}

function resetGame() {
    game.reset();
    init();
}

