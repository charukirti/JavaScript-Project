'use strict'

/* creating random number */

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;
let highscore = 0;

const currScore = document.querySelector('.current-score');

const highScores = document.querySelector('.high-score');

const playAgain = document.querySelector('.play-again');

const userGuess = document.querySelector('.guess');

const message = document.querySelector('.message');

const checkGuess = document.querySelector('.check');

const giveUp = document.querySelector('.giveUp');

const modal = document.querySelector('.modal');

const closeModal = document.querySelector('.close-modal');

const modalHead = document.querySelector('#modalHeading');

const modalTxt = document.querySelector('#modalText');

const emojiChar = document.querySelector('#emoji')


/* checking guess */

checkGuess.addEventListener('click', () => {

    const guessVal = Number(userGuess.value)
    console.log(guessVal, typeof guessVal);

    if (!guessVal) {
        displayMessage('⛔ No number')
    }
    else if (guessVal === randomNumber) {
        showModal('🥳', 'You Won!', 'Well played 👏');
        userGuess.readOnly = true;
        giveUp.disabled = true;
        displayMessage('');
        if (score > highscore) {
            highscore = score;
            highScores.textContent = highscore;
        }
    } else if (guessVal !== randomNumber) {
        if (score > 1) {
            displayMessage(guessVal > randomNumber ? "Try lower number 📉" : "Try Higher Number 📈");
            score--;
            currScore.textContent = score;
        } else {
            showModal('😢', 'You Lost!', 'Play Again');
        }
    }


})


// code for give up button

giveUp.addEventListener('click', () => {
    displayMessage(`You gave up 😢, The secret number is ${randomNumber}`);
    userGuess.readOnly = true;
    checkGuess.disabled = true;
    giveUp.disabled = false;
})


// code for play again button

playAgain.addEventListener('click', () => {
    score = 20;
    currScore.textContent = score;
    userGuess.value = '';
    userGuess.readOnly = false;
    checkGuess.disabled = false;
    giveUp.disabled = false;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNumber);
    displayMessage('Start Guessing....')

})

// function for showing modal when player wins or loose

const showModal = function (emoji, head, txt) {
    modal.classList.remove('hidden');
    emojiChar.textContent = emoji;
    modalHead.textContent = head;
    modalTxt.textContent = txt;
}


// displaying message at perticular stage

const displayMessage = function (msg) {
    message.textContent = msg;
    console.log(message.textContent = msg);
}

// function to exit from modal window

const exit = function () {
    modal.classList.add('hidden');
}
// closing modal when player press Esc btn

document.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        exit();
    }
});

closeModal.addEventListener('click', exit)