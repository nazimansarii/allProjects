const time = () => {
  const setup = document.querySelector(".time");
  const timer = new Date();
  const hoursMinuteSec = timer.toLocaleTimeString();

  setup.innerHTML = hoursMinuteSec;
};

const date = document.querySelector(".date");
const t = new Date();
const d = t.toDateString();

date.innerHTML = d;

setInterval(time, 1000);
