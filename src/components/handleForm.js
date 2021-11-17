import { todoObj } from "./todoObj.js";
import {
  handleForm,
  addTaskToPage,
  handleToDo,
  clearToDoList,
} from "./DOMfunctions.js";
import { taskList } from "./todoObj.js";
import { validateData } from "./formValidation.js";

// let taskList = [];
// let todo1 = {
//   title: "1",
//   description: "des1",
//   date: "2015-14-32",
//   priority: 1,
// };

// let todo2 = {
//   title: "2",
//   description: "des2",
//   date: "2015-14-32",
//   priority: 2,
// };
// let todo3 = {
//   title: "3sdfdsfsadsadsad",
//   description: "des3",
//   date: "2015-14-32",
//   priority: 3,
// };

// taskList.push(todo1, todo2, todo3);

// function removeFromObj(index) {
//   taskList.splice(index, 1);
//   return taskList;
// }

function callDOMfunctions() {
  handleForm("none");
  handleToDo("block");
  clearToDoList();

  addTaskToPage(taskList);
}

function getValues(e) {
  e.preventDefault();
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let dueDate = document.querySelector("#duedate");
  let selected = document.querySelector("#priority");

  // Create object from these values and add them to the list

  let invalid = validateData(title, description, dueDate, selected);
  if (invalid == 0) {
    todoObj(title.value, description.value, dueDate.value, selected.value);
    title.value = "";
    description.value = "";
    dueDate.value = "";
    selected.value = "Select value";
    callDOMfunctions();
  }
}

export { getValues };
