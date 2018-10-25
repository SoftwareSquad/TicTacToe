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