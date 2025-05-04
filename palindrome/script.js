const input = document.querySelector("input");
const result = document.querySelector(".result");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input.value) {
    const isReverse = (str) => {
      let reverse = "";
      for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
      }
      if (str === reverse) {
        result.innerText = ` palindrome:  ${reverse}`;
      } else {
        result.innerText = `not a palindrome:  ${reverse} `;
      }
    };

    isReverse(input.value);
  } else {
    alert("Please fill input ");
  }
});
