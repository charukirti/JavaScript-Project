"use strict";
const stars = document.querySelectorAll(".fa-star");
const emoji = document.querySelectorAll(".emoji");
const colors = ["#e74c3c", "#f39c12", "#48dbfb", "#1dd1a1", "#44bd32"];

update(0);
stars.forEach((stars, index) => {
  stars.addEventListener("click", () => {
    console.log("clicked", index);
    update(index);
  });
});

function update(index) {
  stars.forEach((stars, idx) => {
    if (idx < index + 1) {
      stars.classList.add("active");
    } else {
      stars.classList.remove("active");
    }
  });

  emoji.forEach((emoji) => {
    emoji.style.transform = `translateX(-${index * 50}px)`;
    emoji.style.color = colors[index];
  });
}
