import { todoObj } from "./todoObj.js";
import {
  handleForm,
  addTaskToPage,
  handleToDo,
  clearToDoList,
} from "./DOMfunctions.js";
import { taskList } from "./todoObj.js";
import { validateData } from "./formValidation.js";
import { dictOfProjects } from "./addProject.js";

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

  let whichProject = document.querySelector("h2");
  // Create object from these values and add them to the list

  let invalid = validateData(title, description, dueDate, selected);
  if (invalid == 0) {
    if (whichProject.textContent == "Current") {
      todoObj(title.value, description.value, dueDate.value, selected.value);
    } else {
      todoObj(
        title.value,
        description.value,
        dueDate.value,
        selected.value,
        dictOfProjects[whichProject]
      );
    }

    title.value = "";
    description.value = "";
    dueDate.value = "";
    selected.value = "Select value";
    callDOMfunctions();
  }
}

export { getValues };
