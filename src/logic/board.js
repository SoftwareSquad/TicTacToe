const game = require("./game");

let state;
let hasWon;
let counter;

//Makes a new table
function init() {
    $(".cell").bind("click", checkClick);
    $(".game-text").text("");
    state = state = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']];
    hasWon = false;
    counter = 0;
}

//Listens after a click from the table, gets correct coordinates 
//and inserts correct player(id) and calls check for winner
const checkClick = (event) => {
    const id = event.target.id;
    var coords = this.getCoords(id);
    
    console.log(state);
    console.log(coords[1] + ", " + coords[0]);

    try{
        if (state[coords[1]][coords[0]] != "") {
            //alreadyClicked();
            return;
        }

        insertPlayers(id);
        state = game.changeCell(coords[0], coords[1]);
        $("#player-turn").text(game.player());
        checkForWinner();
    }
    catch(e){
        console.log(e);
        //alreadyClicked();
        return;
    }
}

function alreadyClicked() {
    alert('Please choose another rate');
}

//Gets the coordinates from a cell from each id
module.exports.getCoords = function(string){
    let x = parseInt(string.substring(1, 2)) - 1;
    let y = parseInt(string.substring(3, 4)) - 1;

    return [x, y];
}

module.exports = init;

