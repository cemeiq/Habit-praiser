// Score and level variables to store the text

let level = 0;
levelText.innerHTML = level;
// local storage

// Event listeners
const itemsList = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
localStorage.setItem("items", JSON.stringify(itemsList));

// Start button to make the form appear
startBtn.addEventListener("click", hello);

// Exit Button to make the form dissapear
exitBtn.addEventListener("click", function () {});

// Mark todo as completed
todoList.addEventListener("click", function () {});

// Remove todo from list
todoList.addEventListener("click", function () {});

// functions

// Add todo

// Remove todo

// Add todo to local storage
