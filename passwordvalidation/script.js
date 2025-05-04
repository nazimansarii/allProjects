const toggleBtn = document.querySelector(".toggle-btn");
const inputFeild = document.querySelector(".input-field");
const validate = document.querySelector(".validate");
const checkBtn = document.querySelector(".check-btn");

// show & hide password
toggleBtn.addEventListener("click", () => {
  if (inputFeild.type === "password") {
    inputFeild.type = "text";
    toggleBtn.innerText = "hide";
  } else {
    inputFeild.type = "password";
    toggleBtn.innerText = "show";
  }
});

// regex for validation
const upperCase = /[A-Z]/g;
const lowerCase = /[a-z]/g;
const number = /[0-9]/g;

checkBtn.addEventListener("click", () => {
  const inputValue = inputFeild.value;

  inputValue.match(number)
    ? ""
    : (validate.innerText = "password must have number");

  inputValue.match(lowerCase)
    ? ""
    : (validate.innerText = "password must have lowecase");

  inputValue.match(upperCase)
    ? ""
    : (validate.innerText = "password must have upper case");

  inputValue === "" ? (validate.innerText = "please enter password") : "";
  
  inputValue.match(upperCase) &&
  inputValue.match(lowerCase) &&
  inputValue.match(number)
    ? (validate.innerText = "right password ")
    : "";
});
