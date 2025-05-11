let englishVoice = null;

document.querySelector("#speak").addEventListener("click", () => {
  const text = document.querySelector("#text").value;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
});

