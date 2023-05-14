"use strict";

const btn = document.getElementById("btn");

const result = document.getElementById("res");

const weightCondition = document.getElementById("weight_condition");

btn.addEventListener("click", () => {
  const heightVal = document.getElementById("height").value / 100;
  const weightVal = document.getElementById("weight").value;

  const bmiValue = weightVal / (heightVal * heightVal);
  console.log("It works");
  console.log(heightVal, weightVal);
  console.log(bmiValue);
  result.value = bmiValue;

  if (bmiValue < 18.5) {
    weightCondition.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    weightCondition.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    weightCondition.innerText = "Overweight";
  } else {
    weightCondition.innerText = "BMI of 30 or greater";
  }
});
