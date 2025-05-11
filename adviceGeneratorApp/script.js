function fetchAdvice() {
  const advice = document.querySelector(".advice-id");
  const adviceId = document.querySelector(".advice-hastag");
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      advice.innerHTML = `“${data.slip.advice}”`;
      adviceId.innerHTML = `ADVICE   #${data.slip.id}`;
    })
    .catch(
      (err) => (advice.innerHTML = "Error fetching advice. Please try again.")
    );
}

fetchAdvice();

document.querySelector(".generate-btn").addEventListener("click", fetchAdvice);
