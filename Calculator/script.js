'use strict'

const display = document.querySelector('#result');
const buttons = document.querySelectorAll('.key');
const specialChars = ['+', '-', '*', '/', '=', '%', 'AC', 'DEL'];

let outputVal = '';

const calculate = (btnVal) => {
    if (btnVal === '=' && outputVal !== '') {
        try {
            outputVal = eval(outputVal);
        } catch (error) {
            outputVal = 'Error';
        }
    } else if (btnVal == 'AC') {
        outputVal = ''
    } else if (btnVal == 'DEL') {
        outputVal = outputVal.slice(0, -1)
    }
    else {
        if (outputVal === "" && specialChars.includes(btnVal)) return;
        outputVal += btnVal;
    }

    display.value = outputVal;


}

buttons.forEach(btn => {
    btn.addEventListener('click', e => calculate(e.target.dataset.value))
})

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    const key = event.key;

    if (key === '=' || key === 'Enter') {
        calculate('=');
    } else if (key === 'Backspace') {
        calculate('DEL');
    } else if (key === 'Escape') {
        calculate('AC');
    } else if (specialChars.includes(key)) {
        calculate(key);
    } else if (!isNaN(key) || key === '.') {
        calculate(key);
    }
});
