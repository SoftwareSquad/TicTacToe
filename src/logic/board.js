const game = require("./game");

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