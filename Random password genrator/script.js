'use strict'

const generateBtn = document.querySelector('#generate');
const pass = document.querySelector('#password');
const copyBtn = document.querySelector('#copyBtn');
const lenEl = document.querySelector('#length');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const numberEl = document.querySelector('#number');
const symboleEl = document.querySelector('#symbole');

const upperCase = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symboles = "~!@#$%^&*()_+=|";



generateBtn.addEventListener('click', () => {
    const length = +lenEl.value;
    const hasUpperCase = upperEl.checked;
    const hasLowerCase = lowerEl.checked;
    const hasNumbers = numberEl.checked;
    const hasSymboles = symboleEl.checked;
    pass.textContent = generatePassword(length, hasUpperCase, hasLowerCase, hasNumbers, hasSymboles);
})

// password will generated here

const generatePassword = function (length, hasUpperCase, hasLowerCase, hasNumbers, hasSymboles) {
    let charSet = '';

    if (hasUpperCase) {
        charSet += upperCase;
    }

    if (hasLowerCase) {
        charSet += lowerCase;
    }

    if (hasNumbers) {
        charSet += numbers;
    }

    if (hasSymboles) {
        charSet += symboles;
    }

    let passwordChar = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charSet.length);
        passwordChar += charSet.charAt(randomIndex);
    }
    return passwordChar;
}

copyBtn.addEventListener('click', () => {
    const password = pass.innerText;
    if (!password) {
        return;
    }
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!')
})