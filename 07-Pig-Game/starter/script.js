'use strict';


let player = 1;
let currentScore = 0;
let player1Score = 0;
let player2Score = 0;


function rollDice() {
    console.log("rollDice");
    console.log(player);
}

function hold(){
    console.log('hold')
}

function newGame(){

}

document.querySelector(".btn--roll")
    .addEventListener('click', rollDice);

