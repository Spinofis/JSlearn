'use strict';


var secretNumber = Math.floor(Math.random() * 20) + 1;
var highScore = 0;
var score = 20;
console.log('secretNumber');
console.log(secretNumber);

function play() {
    var guess = Number(document.querySelector('.guess').value);
    if (!guess)
        displayMessage('⛔️ No number!')
    resolveGuess(guess);
    setScore(score);
    if (score === 0)
        onLoose();
}

function resolveGuess(guess) {
    if (guess === secretNumber) {
        onWin();
    }
    else if (guess < secretNumber) {
        displayMessage('📉 Too low!');
        score--;
    }
    else if (guess > secretNumber) {
        displayMessage('📈 Too high!');
        score--;
    }
}

function onWin() {
    displayMessage('🎉 Correct Number!');
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
    let numberNode = document.querySelector('.number');
    numberNode.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberNode.style.width = '30rem';
}

function onLoose() {
    displayMessage('💥 You lost the game!');
}

function resetGame() {
    let numberNode = document.querySelector('.number');
    numberNode.textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    numberNode.style.width = '15rem';
    numberNode.textContent = '?';
    displayMessage('Start guessing...');
    secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log('secretNumber');
    console.log(secretNumber);
    score = 20;
    document.querySelector('.score').textContent = 20;
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function setScore(score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check')
    .addEventListener('click', play);

document.querySelector('.again')
    .addEventListener('click', resetGame);