const input = document.querySelector(".input");
const result = document.querySelector(".result");

input.addEventListener("input", (e) => {
  if (parseInt(e.target.value) % 2 === 0) {
    result.innerText = "Even Number";
  } else {
    result.innerText = "Odd Number";
  }
});
