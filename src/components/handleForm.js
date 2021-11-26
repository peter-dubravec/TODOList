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
  displayOrHideToDo("flex");
  clearToDoList();

  addTaskToPage(dictOfProjects[projectName]);
}

function handleDate(dueDate) {
  let selectedDate = dueDate.value;
  const date = dateFns.parse(selectedDate, "MM-dd-yyyy", new Date());
  if (date < new Date()) {
    alert("Invalid date! Task was already due!");
    return;
  }
  const result = dateFns.distanceInWordsToNow(date, new Date());
  return result;
}

function getValues(e) {
  e.preventDefault();
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let dueDate = document.querySelector("#duedate");
  let selected = document.querySelector("#priority");
  let projectName = document.querySelector("h2").textContent;

  // Create object from these values and add them to the list
  let date = handleDate(dueDate);
  let invalid = validateData(title, description, dueDate, selected);
  if (invalid == 0) {
    todoObj(title.value, description.value, date, selected.value, projectName);
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
