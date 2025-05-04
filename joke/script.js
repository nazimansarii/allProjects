const joke = document.querySelector("#joke");

const fetchJokes = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    joke.innerHTML = data.joke;
  } catch (err) {
    joke.innerHTML = err.message;
  }
};

fetchJokes();

document.querySelector("#jokeBtn").addEventListener("click", fetchJokes);
