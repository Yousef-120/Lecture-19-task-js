let taskNames = ["Fix Navbar", "Design Footer", "Add Animation", "Test Form", "Upload Images"];
let taskCases = ["In Progress", "Completed", "Not Started", "Completed", "In Progress"];

function showTasks() {
  if (taskNames.length === 0) {
    console.clear();
    alert(`The tasks are empty!`);
  } else {
    console.clear();
    console.table(taskNames);
    console.table(taskCases);
  }
}
function addTask() {
  let newTaskName = prompt("Enter Task Name:");
  let newTaskCase = prompt("Enter Task Case:");
  taskNames.push(newTaskName);
  taskCases.push(newTaskCase);
  showTasks();
}
function editTaskName() {
  if (taskNames.length !== 0 && taskCases.length !== 0) {
    index = +prompt(`Enter the index of the task name to edit:`);
    if (index >= 0 && index < taskNames.length) {
      let oldValue = taskNames[index];
      taskNames[index] = prompt(`Enter The New Task Name For -->  "` + taskNames[index] + `" :`);
      alert(`Operation successful: changed from "` + oldValue + `" to "` + taskNames[index] + `"`);
      showTasks();
    } else {
      alert(`Please enter a valid index.`);
    }
  } else {
    alert(`The tasks are empty!`);
  }
}
function editTaskCase() {
  if (taskNames.length !== 0 && taskCases.length !== 0) {
    index = +prompt(`Enter the index of the task you want to edit its case:`);
    if (index >= 0 && index < taskCases.length) {
      let oldValue = taskCases[index];
      taskCases[index] = prompt(`Enter The New Task Case For -->  "` + taskCases[index] + `" Belongs to "` + taskNames[index] + `" :`);
      alert(`Operation successful: changed from "` + oldValue + `" to "` + taskCases[index] + `"`);
      showTasks();
    } else {
      alert(`Please enter a valid index.`);
    }
  } else {
    alert(`The tasks are empty!`);
  }
}
function editEntireTask() {
  if (taskNames.length !== 0 && taskCases.length !== 0) {
    index = +prompt(`Enter the index of the task you want to edit:`);
    if (index >= 0 && index < taskCases.length) {
      let oldNameValue = taskNames[index];
      let oldCaseValue = taskCases[index];
      taskNames[index] = prompt(`Enter The New Task Name For -->  "` + taskNames[index] + `" :`);
      taskCases[index] = prompt(`Enter The New Task Case For -->  "` + taskNames[index] + `" The old task case is "` + taskCases[index] + `" :`);
      alert(
        `Operation successful: The Task Name changed from "` + oldNameValue + `" to "` + taskNames[index] + `" And The Task Case changed from : "` + oldCaseValue + `" to "` + taskCases[index] + `"`
      );
      showTasks();
    } else {
      alert(`Please enter a valid index.`);
    }
  } else {
    alert(`The tasks are empty!`);
  }
}
function deleteTask() {
  if (taskNames.length !== 0 && taskCases.length !== 0) {
    if (taskNames.length !== 1) {
      let index = +prompt(`Enter the index of the task you want to delete:`);
      taskNames.splice(index, 1);
      taskCases.splice(index, 1);
      showTasks();
      alert(`The task has been successfully deleted.`);
    } else {
      let confirmDelete = confirm(`Are you sure you want to delete this task -->  ` + taskNames[0]);
      if (confirmDelete) {
        taskNames.splice(0, 1);
        taskCases.splice(0, 1);
        console.clear()
        alert(`TThe tasks list is now empty.`);
      } else {
        alert(`Delete action has been undone.`);
      }
    }
  } else {
    alert(`The tasks are empty!`);
  }
}

function clearTasks() {
  if (taskNames.length !== 0 && taskCases.length !== 0) {
    clearTasksConfirm = confirm(`Are you sure you want to delete all tasks?`);
    if (clearTasksConfirm == true) {
      taskNames.splice(0, taskNames.length);
      taskCases.splice(0, taskCases.length);
      console.clear();
      alert(`All tasks have been successfully deleted.`);
    } else {
      alert(`Delete action has been undone.`);
    }
  } else {
    alert(`The tasks are empty!`);
  }
}
