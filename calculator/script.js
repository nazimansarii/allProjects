const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  themeBtn.classList.toggle("left-slide");
  const body = document.querySelector("body");
  if (themeBtn.classList.contains("left-slide")) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});

const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');
    let expression = '';

    function updateScreen() {
      screen.textContent = expression || '0';
    }

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'RESET') {
          expression = '';
        } else if (value === 'DEL') {
          expression = expression.slice(0, -1);
        } else if (value === '=') {
          try {
            const formatted = expression.replace(/x/g, '*');
            expression = eval(formatted).toString();
          } catch {
            expression = 'Error';
          }
        } else {
          expression += value;
        }

        updateScreen();
      });
    });