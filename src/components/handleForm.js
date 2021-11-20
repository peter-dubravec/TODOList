import { todoObj } from "./objectFunctions.js";
import {
  displayOrHideForm,
  addTaskToPage,
  displayOrHideToDo,
  clearToDoList,
} from "./DOMfunctions.js";
import { dictOfProjects } from "../index.js";
import { validateData } from "./formValidation.js";


function callDOMfunctions(projectName) {
  displayOrHideForm("none");
  displayOrHideToDo("block");
  clearToDoList();

  addTaskToPage(dictOfProjects[projectName]);
}

function getValues(e) {
  e.preventDefault();
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let dueDate = document.querySelector("#duedate");
  let selected = document.querySelector("#priority");
  let projectName = document.querySelector("h2").textContent;

  // Create object from these values and add them to the list

  let invalid = validateData(title, description, dueDate, selected);
  if (invalid == 0) {
    todoObj(
      title.value,
      description.value,
      dueDate.value,
      selected.value,
      projectName
    );
  } else {
    return;
  }

  title.value = "";
  description.value = "";
  dueDate.value = "";
  selected.value = "Select value";
  callDOMfunctions(projectName);
}

export { getValues };
