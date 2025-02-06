let taskCount = 0;
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
  document.querySelector("tbody").append(newRow);
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

// if (taskCount > 0) {
//   let allDeleteRow = document.querySelectorAll("#delete-row");
//   console.log(allDeleteRow);
//   allDeleteRow.addEventListener("click", (e) => {
//     console.log("delete button pressed", e);
//   });
// }
