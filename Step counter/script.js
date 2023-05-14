"use strict";

const progress = document.getElementById("progress");
const preview = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(currentActive);

  update();
});

preview.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);

  update();
});

const update = function () {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    preview.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    preview.disabled = false;
    next.disabled = false;
  }
};
