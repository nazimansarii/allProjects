const generatedPassword = document.querySelector(".generated-pass");
const generateBtn = document.querySelector(".generate-btn");
const click = document.querySelector(".click");

generateBtn.addEventListener("click", () => {
  const length = 12;
  const validChar = /[A-Za-z0-9!@#$%^&*]/;
  let password = "";
  while (password.length < length) {
    const char = String.fromCharCode(Math.floor(Math.random() * 127));
    if (validChar.test(char)) {
      password += char;
    }
  }
  generatedPassword.innerHTML = password;
});

generatedPassword.addEventListener("click", () => {
  navigator.clipboard.writeText(generatedPassword.innerHTML);

  if (navigator.clipboard.writeText(generatedPassword.innerHTML)) {
    click.innerHTML = "copied passowrd";
    setTimeout(() => {
      click.innerHTML = "click to copy";
    }, 3000);
  }
});
