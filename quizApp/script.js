const questions = [
  {
    question: "What is JavaScript?",
    answers: [
      { text: "A markup language", correct: false },
      { text: "A database query language", correct: false },
      { text: "A programming language", correct: true },
      { text: "A browser", correct: false },
    ],
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "=", correct: false },
      { text: "!==", correct: false },
    ],
  },
  {
    question: "What is the output of `typeof null`?",
    answers: [
      { text: "null", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: true },
      { text: "function", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a constant?",
    answers: [
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false },
    ],
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "JSON.toObject()", correct: false },
      { text: "parseJSON()", correct: false },
    ],
  },
  {
    question: "Which of the following can run JavaScript outside the browser?",
    answers: [
      { text: "React", correct: false },
      { text: "Node.js", correct: true },
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
    ],
  },
  {
    question:
      "Which function is used to print messages to the browser console?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "log()", correct: false },
      { text: "alert()", correct: false },
    ],
  },
  {
    question: "What is the correct syntax for a function?",
    answers: [
      { text: "function = myFunc()", correct: false },
      { text: "function:myFunc()", correct: false },
      { text: "function myFunc() {}", correct: true },
      { text: "myFunc():function {}", correct: false },
    ],
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Google", correct: false },
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    answers: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Character", correct: true },
    ],
  },
  {
    question: "Which keyword declares a block-scoped variable?",
    answers: [
      { text: "var", correct: false },
      { text: "const", correct: false },
      { text: "let", correct: true },
      { text: "static", correct: false },
    ],
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Data Object Model", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Design Object Model", correct: false },
      { text: "Document Order Mode", correct: false },
    ],
  },
  {
    question: "Which operator is used for assignment?",
    answers: [
      { text: "==", correct: false },
      { text: "===", correct: false },
      { text: "=", correct: true },
      { text: "!=", correct: false },
    ],
  },
  {
    question: "Which of the following is a loop structure in JavaScript?",
    answers: [
      { text: "for", correct: true },
      { text: "foreach", correct: false },
      { text: "repeat", correct: false },
      { text: "loop", correct: false },
    ],
  },
  {
    question: "What is an array?",
    answers: [
      { text: "A function", correct: false },
      { text: "A variable that holds multiple values", correct: true },
      { text: "A class", correct: false },
      { text: "A method", correct: false },
    ],
  },
  {
    question: "Which method adds an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "Which method removes the last item from an array?",
    answers: [
      { text: "shift()", correct: false },
      { text: "pop()", correct: true },
      { text: "unshift()", correct: false },
      { text: "splice()", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "<!--", correct: false },
      { text: "#", correct: false },
      { text: "**", correct: false },
    ],
  },
  {
    question: "How do you write an if statement?",
    answers: [
      { text: "if i == 5 then", correct: false },
      { text: "if i = 5", correct: false },
      { text: "if (i == 5)", correct: true },
      { text: "if i = 5 then", correct: false },
    ],
  },
  {
    question: "What does NaN stand for?",
    answers: [
      { text: "Not a Null", correct: false },
      { text: "No actual Number", correct: false },
      { text: "Not a Number", correct: true },
      { text: "Null as Number", correct: false },
    ],
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    answers: [
      { text: "4", correct: false },
      { text: "22", correct: true },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "Which method can be used to convert a string to an integer?",
    answers: [
      { text: "parseInt()", correct: true },
      { text: "stringToInt()", correct: false },
      { text: "parseFloat()", correct: false },
      { text: "int()", correct: false },
    ],
  },
  {
    question: "What is `this` keyword in JavaScript?",
    answers: [
      { text: "It refers to the current object", correct: true },
      { text: "It refers to the global object only", correct: false },
      { text: "It creates a new variable", correct: false },
      { text: "It is used to call functions", correct: false },
    ],
  },
  {
    question: "Which method is used to join array elements into a string?",
    answers: [
      { text: "concat()", correct: false },
      { text: "join()", correct: true },
      { text: "split()", correct: false },
      { text: "merge()", correct: false },
    ],
  },
  {
    question: "How do you declare a JavaScript object?",
    answers: [
      { text: "let obj = {}", correct: true },
      { text: "let obj = []", correct: false },
      { text: "let obj = ()", correct: false },
      { text: "let obj = ''", correct: false },
    ],
  },
  {
    question: "What is the value of `false == 0`?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "Which operator is used to spread array elements?",
    answers: [
      { text: "...", correct: true },
      { text: "*", correct: false },
      { text: "&", correct: false },
      { text: "+", correct: false },
    ],
  },
  {
    question: "Which keyword is used for exception handling?",
    answers: [
      { text: "try", correct: false },
      { text: "catch", correct: false },
      { text: "throw", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "How do you create a promise?",
    answers: [
      { text: "new Promise()", correct: true },
      { text: "Promise.create()", correct: false },
      { text: "promise()", correct: false },
      { text: "await promise()", correct: false },
    ],
  },
  {
    question: "Which keyword pauses async function execution?",
    answers: [
      { text: "await", correct: true },
      { text: "pause", correct: false },
      { text: "wait", correct: false },
      { text: "sleep", correct: false },
    ],
  },
];

const questionEl = document.querySelector(".question");
const optionList = document.querySelector(".option-list");
const nextBtn = document.querySelector(".next-btn");
let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  optionList.innerHTML = "";
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  nextBtn.disabled = true;
  nextBtn.classList.add("disabled");
  currentQuestion.answers.forEach((answer) => {
    const li = document.createElement("li");
    li.classList.add("option");
    li.textContent = answer.text;
    if (answer.correct) {
      li.dataset.correct = "true";
    }

    li.addEventListener("click", () => {
      const isCorrect = li.dataset.correct === "true";
      if (isCorrect) {
        score++;
      }

      li.classList.add(isCorrect ? "correct" : "incorrect");
      nextBtn.disabled = false;
      nextBtn.classList.remove("disabled");

      Array.from(optionList.children).forEach((option) => {
        option.classList.add("disabled");
        if (option.dataset.correct === "true") {
          option.classList.add("correct");
        }
      });
    });

    optionList.appendChild(li);
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Quiz completed!";
    questionEl.textContent = `Quiz completed! Your score is ${score} out of ${questions.length}`;
    optionList.innerHTML = "";
    nextBtn.style.display = "none";
  }
  document.querySelector(
    ".question-count"
  ).innerHTML = `${currentQuestionIndex} of 30 Questions`;
});
document.querySelector(
  ".question-count"
).innerHTML = `${currentQuestionIndex} of 30 Questions`;
showQuestion();
