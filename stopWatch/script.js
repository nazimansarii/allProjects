let [milliseconds, seconds, minutes] = [0, 0, 0];
let display = document.querySelector(".set-time");
let timer = null;

// start timer
document.querySelector(".start-btn").addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    milliseconds += 1; // Increment milliseconds by 10 (for 1/100th of a second)
    if (milliseconds == 100) {
      milliseconds = 0;
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
        }
      }
    }

    let m = minutes < 10 ? `0${minutes}` : minutes;
    let s = seconds < 10 ? `0${seconds}` : seconds;
    let ms =
      milliseconds < 100
        ? `0${milliseconds}`.toString().slice(-2)
        : milliseconds.toString().slice(-2);
    display.innerHTML = `${m}:${s}:${ms}`;
  }, 10); // Run the interval every 10 milliseconds
});

// stop timer
document.querySelector(".stop-btn").addEventListener("click", () => {
  clearInterval(timer);
});

// reset time
document.querySelector(".reset-btn").addEventListener("click", () => {
  clearInterval(timer);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  display.innerHTML = "00:00:00";
});
