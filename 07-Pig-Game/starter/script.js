'use strict';


let player = 1;
let currentScore = 0;
let player1Score = 0;
let player2Score = 0;

const minDice = 0;
const maxDice = 6;
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

newGame();

function rollDice() {
    console.log("rollDice");
    console.log(player);

    let diceNumber = getDiceNumber();
    console.log('dice ' + dice);
    dice.src = `dice-${dice}.png`;
    dice.classList.remove('hidden');
}

function hold() {
    console.log('hold')
}

function newGame() {
    score1.textContent = 0;
    score2.textContent = 0;
    dice.classList.add('hidden');
}

function getDiceNumber() {
    return Math.floor(Math.random() * (maxDice - minDice + 1)) + minDice;
}

document.querySelector(".btn--roll")
    .addEventListener('click', rollDice);

