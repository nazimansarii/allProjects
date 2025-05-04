const inputField = document.querySelector(".input-field");
const result = document.querySelector(".result");
let count = 3;
const counter = document.querySelector(".count");
counter.innerHTML = `Count : ${count}`;

document.querySelector(".check-btn").addEventListener("click", (e) => {
  count--;
  const randomNumber = Math.floor(Math.random() * 100);
  if (parseInt(inputField.value) === randomNumber) {
    result.textContent = "you guessed is correct";
  } else if (parseInt(inputField.value) < randomNumber) {
    result.textContent = `you guessed too low, correct : ${randomNumber}`;
  } else if (parseInt(inputField.value) > randomNumber) {
    result.textContent = `you guessed too high,  correct : ${randomNumber}`;
  } else if (typeof inputField.value === "string") {
    result.textContent = "Please enter number ";
  }


  counter.innerHTML = `Count : ${count}`;
  const tryAgain = document.querySelector(".try-again");
  if (!count) {
    result.textContent = "you lose game";
    e.target.disabled = true;
    tryAgain.style.display = "block";
  }

  tryAgain.addEventListener("click", () => {
    result.textContent = "";
    e.target.disabled = false;
    counter.innerHTML = `Count : ${count}`
    count = 3;
    tryAgain.style.display = "none";
  });

  inputField.value = "";
});
