// Button Selectors
let score = 0;
const startBtn = document.getElementById("startbtn");
const exitBtn = document.getElementById("exit-btn");
const submitBtn = document.getElementById("submit-btn");
const togglers = document.getElementsByClassName(".toggler");

// Containers, texts and inputs

const startContainer = document.querySelector(".start-container");
const formContainer = document.querySelector(".form-container");
const dataContainer = document.querySelector(".dataContainer");
const form = document.querySelector(".form");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const levelText = document.getElementById("level-start");
const scoreText = document.getElementById("score-start");

// Sounds
const clickSound = document.getElementById("click-sound");

// Score and level variables

startBtn.addEventListener("click", changeContainer);
exitBtn.addEventListener("click", exitContainer);
submitBtn.addEventListener("click", () => addtodo(todoInput.value));
todoList.addEventListener("click", checktodo);

// Local Storage
const data = JSON.parse(localStorage.getItem("items"));

if (data) {
  data.forEach((note) => addtodo(note));
}

// functions

// mark todo as completed
function check() {
  if (document.getElementById("checkit").clicked === true) {
    alert("button was clicked");
  }
}

//change container from start to form container
function changeContainer() {
  startContainer.classList.add("none");
  formContainer.classList.add("block");

  window.watsonAssistantChatOptions = {
    integrationID: "cd5dd492-1bba-451a-9c5b-a74e0f0efc37", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "6c7f0bcd-fc6e-4678-8cd9-2bc7fa1c6303", // The ID of your service instance.
    onLoad: function (instance) {
      instance.render();
    }
  };
  setTimeout(function () {
    const t = document.createElement("script");
    t.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
  clickSound.play();
}

// change container from form to start
function exitContainer() {
  formContainer.classList.remove("block");
  startContainer.classList.remove("none");
  clickSound.play();
}

function checktodo(event) {
  console.log("Fire");
  scoreText.innerHTML = score;
  const item = event.target;

  if (item.classList[1] === "fa-check") {
    const todo = item.parentElement;
    todo.classList.toggle("checked-item");

    if (todo.classList.contains("checked-item")) {
      score += 5;
      scoreText.innerHTML = score;
    }
  }
}

// Add new todo
const addtodo = (text) => {
  // Create div and list element
  if (text === "") {
    alert("Enter something");
  } else {
  }

  todoInput.value = "";

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("list-item");

  const newTodo = document.createElement("li");
  newTodo.textContent = text;

  // Buttons to check and delete task. They are in a div so the flex container works properly

  const completedButton = document.createElement("i");
  completedButton.classList.add("fas", "fa-check", "icon-btn");
  completedButton.setAttribute("id", "checkit");
  const deleteButton = document.createElement("i");
  deleteButton.classList.add("fas", "fa-trash-alt", "icon-btn");

  todoDiv.appendChild(newTodo);
  todoDiv.appendChild(completedButton);
  todoDiv.appendChild(deleteButton);
  todoList.appendChild(todoDiv);
};

// check todo

// submit form

function submitform(event) {
  event.preventDefault();
}

data.forEach((item) => {
  addtodo(item);
});
