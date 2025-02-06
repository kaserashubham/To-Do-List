let taskCount = 0;
let taskContainer = document.querySelector("tbody");

document
  .querySelector("form")
  .addEventListener("submit", (e) => e.preventDefault());
//
const createNewRow = (task) => {
  let newRow = document.createElement("tr");
  let newData;
  //   newData = document.createElement("td");
  //   newData.innerText = ++taskCount;
  //   newRow.append(newData);
  newData = document.createElement("td");
  newData.innerText = task;
  newRow.append(newData);
  newData = document.createElement("td");
  newData.innerHTML = '<button id="delete-row">Delete</button>';
  newRow.append(newData);
  taskContainer.append(newRow);
  saveList();
};
document.querySelector("#add-task").addEventListener("click", (event) => {
  console.log("add button clicked");
  // create a new row
  let newTask = document.querySelector("#task-input").value;
  console.log(newTask);
  if (newTask !== null) {
    createNewRow(newTask);
  }

  document.querySelector("#task-input").value = null;
});
const addDummyLog = (noOfTasks) => {
  for (let i = 0; i < noOfTasks; i++) {
    createNewRow(`Task number ${i + 1}`);
  }
};

// addDummyLog(5);
// if (taskCount > 0) {
//   let allDeleteRow = document.querySelectorAll("#delete-row");
//   console.log(allDeleteRow);
//   allDeleteRow.addEventListener("click", (e) => {
//     console.log("delete button pressed", e);
//   });
// }
// let tableBody = taskContainer;
taskContainer.addEventListener("click", (e) => {
  console.log(e.target.innerText == "Delete");
  console.log(e.target);
  if (e.target.innerText == "Delete") {
    // confirm("Do you want to delete task?");
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
    saveList();
  }
});

function saveList() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

taskContainer.innerHTML = localStorage.getItem("data");
console.log(localStorage.getItem("data"));
