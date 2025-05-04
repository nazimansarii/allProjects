// timestamp
const updateTimestamp = () => {
  const now = new Date();
  document.getElementById("timestamp").innerHTML = now.toLocaleString();
};
updateTimestamp();
setInterval(updateTimestamp, 1000);

// add new task
let lists = JSON.parse(localStorage.getItem("todoLists")) || [];
const addTaskBtn = document.getElementById("addTaskBtn"); // add task button
const taskInput = document.getElementById("taskInput"); // input element
const warning = document.getElementById("warning"); // warning
const taskList = document.getElementById("taskList"); // display task

// display items
const displayTask = (el) => {
  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  taskItem.innerHTML = `
  <span class="task-text">${el}</span>
  <div class="buttons">
    <button class="circle-btn check-btn" onclick="completeTask(this)">✓</button>
    <button class="circle-btn delete-btn" onclick="deleteTask(this)" >✕</button>
  </div>
`;
  taskList.append(taskItem);
};

// warning function
const setErr = (el, err) => {
  el.innerHTML = err;
  setTimeout(() => {
    el.innerHTML = "";
  }, 2000);
};

addTaskBtn.addEventListener("click", () => {
  let inputValue = taskInput.value.trim();

  if (inputValue !== "") {
    if (!lists.includes(inputValue)) {
      lists.push(inputValue);
      localStorage.setItem("todoLists", JSON.stringify(lists));

      displayTask(inputValue);
    } else {
      setErr(warning, "Same task not allowed");
    }
  } else {
    setErr(warning, "Empty value not allowed");
  }
  taskInput.value = "";
});

// display initial items
const storedTask = JSON.parse(localStorage.getItem("todoLists")) || [];
storedTask.forEach((element) => {
  displayTask(element);
});

function completeTask(button) {
  const taskText = button.parentElement.previousElementSibling;
  taskText.classList.toggle("completed");
}

function deleteTask(button) {
  const taskItem = button.closest(".task-item");
  const taskText = taskItem.querySelector(".task-text").textContent;

  // Remove the task from the lists array
  lists = lists.filter((task) => task !== taskText);

  // Update localStorage
  localStorage.setItem("todoLists", JSON.stringify(lists));

  // Remove the task from the display
  taskItem.remove();
}
