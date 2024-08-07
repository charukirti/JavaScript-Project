'use strict';

// Getting all the elements 

// Selecting all the input elements
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

// Selecting all the buttons
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// Initial countdown value
let countDownTime = null;
let interval = null;

// Function to update the time display
function updateDisplay() {
    hours.value = String(hours.value).padStart(2, '0');
    minutes.value = String(minutes.value).padStart(2, '0');
    seconds.value = String(seconds.value).padStart(2, '0');
}

// Function to start the countdown
function startCountdown() {
    startBtn.style.display = 'none';
    stopBtn.style.display = 'initial';

    const totalSeconds = parseInt(hours.value) * 3600 + parseInt(minutes.value) * 60 + parseInt(seconds.value);

    let remainingSeconds = totalSeconds;

    interval = setInterval(() => {
        if (remainingSeconds <= 0) {
            clearInterval(interval);
            updateDisplay();
            startBtn.style.display = 'initial';
            stopBtn.style.display = 'none';
            return;
        }

        remainingSeconds--;

        const hrs = Math.floor(remainingSeconds / 3600);
        const mins = Math.floor((remainingSeconds % 3600) / 60);
        const secs = remainingSeconds % 60;

        hours.value = String(hrs).padStart(2, '0');
        minutes.value = String(mins).padStart(2, '0');
        seconds.value = String(secs).padStart(2, '0');

        updateDisplay();
    }, 1000);
}

// Function to stop the countdown
function stopCountdown() {
    clearInterval(interval);
    startBtn.style.display = 'initial';
    stopBtn.style.display = 'none';
}

// Function to reset the countdown
function resetCountdown() {
    clearInterval(interval);
    hours.value = '00';
    minutes.value = '00';
    seconds.value = '00';
    updateDisplay();
    startBtn.style.display = 'initial';
    stopBtn.style.display = 'none';
}

// Adding event listeners for the buttons
startBtn.addEventListener('click', () => {
    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) return;
    startCountdown();
});

stopBtn.addEventListener('click', stopCountdown);

resetBtn.addEventListener('click', resetCountdown);

// Initial display update
updateDisplay();
