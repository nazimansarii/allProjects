const leftbtn = document.querySelector(".leftbtn");
const rightbtn = document.querySelector(".rightbtn");
const mainContainer = document.querySelector(".main-container");
const copyCode = document.querySelector(".copy-code");
const copyText = document.querySelector(".copy-text");

const getHexCode = () => {
  let hexCode = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + hexCode[Math.floor(Math.random() * 16)];
  }
  return colors;
};

let rgb1 = "#000";
let rgb2 = "#fff";

leftbtn.addEventListener("click", () => {
  rgb1 = getHexCode();
  mainContainer.style.backgroundImage = `linear-gradient( to right, ${rgb1}, ${rgb2} )`;
  leftbtn.innerText = rgb1;
  leftbtn.style.color = rgb1;
  copyCode.innerText = ` background-image: linear-gradient( to right, ${rgb1}, ${rgb2})`;
});

rightbtn.addEventListener("click", () => {
  rgb2 = getHexCode();
  mainContainer.style.backgroundImage = `linear-gradient( to right, ${rgb1}, ${rgb2} )`;
  rightbtn.innerText = rgb2;
  rightbtn.style.color = rgb2;
  copyCode.innerText = ` background-image: linear-gradient( to right, ${rgb1}, ${rgb2})`;
});

copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText);

  if (navigator.clipboard.writeText(copyCode.innerText)) {
    copyText.innerHTML = "Color copied!";
    setTimeout(() => {
      copyText.innerHTML = "Click to copy color";
    }, 2000);
  }
});
