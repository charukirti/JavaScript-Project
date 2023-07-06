"use strict";

const num = document.querySelector(".number");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");

let counter = 0;
increment.addEventListener("click", () => {
  counter++;
  num.textContent = counter;
});

decrement.addEventListener('click', ()=>{
  counter--;
  num.textContent = counter;
})


