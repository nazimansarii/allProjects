document.querySelector(".generate-btn").addEventListener("click", () => {
  const hex = "01234567889abcdef";
  let colors = "#";

  for (let i = 1; i <= 6; i++) {
    colors += hex[Math.floor(Math.random() * 16)];
  }
  document.querySelector('.color-code').textContent = colors
  document.querySelector(".color-preview").style.backgroundColor = colors;
});
