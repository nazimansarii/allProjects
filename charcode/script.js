const input = document.querySelector(".input");
const keyPressed = document.querySelector(".key-pressed");
const keyCode = document.querySelector(".key-code");
const charCode = document.querySelector(".char-code");
const evenType = document.querySelector(".even-type");

const inputHandler = (e) => {
  
  keyPressed.innerText = e.key;
  charCode.innerText = e.key.charCodeAt(0);
  keyCode.innerText = e.code;
  evenType.innerText = e.type;
};

input.addEventListener("keydown", inputHandler);
