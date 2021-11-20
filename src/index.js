// import "./style.css";
import { getValues } from "./components/handleForm.js";
import { addQuery } from "./components/addProject.js";
import {
  displayCurrentTasks,
  addTaskToPage,
} from "./components/DOMfunctions.js";
import { taskList } from "./components/todoObj.js";

let addtaskform = document.querySelector(".addtaskform");
addtaskform.addEventListener("submit", getValues, false);

let addProject = document.querySelector(".addproject");
addProject.addEventListener("click", addQuery, false);

let currentTask = document.querySelector(".newtasks");
currentTask.addEventListener("click", displayCurrentTasks);

addTaskToPage(taskList);
