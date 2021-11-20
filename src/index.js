// import "./style.css";
import { getValues } from "./components/handleForm.js";
import { addQuery } from "./components/projectFunctions.js";
import {
  displayCurrentTasks,
  addTaskToPage,
} from "./components/DOMfunctions.js";
import { dictOfProjects, showProjects } from "./components/projectFunctions.js";

let addtaskform = document.querySelector(".addtaskform");
addtaskform.addEventListener("submit", getValues, false);

let addProject = document.querySelector(".addproject");
addProject.addEventListener("click", addQuery, false);

let currentTask = document.querySelector(".current");
currentTask.addEventListener("click", displayCurrentTasks);

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  if (localStorage.getItem("projects")) {
    let retrievedObject = localStorage.getItem("projects");
    let dictOfProjects = JSON.parse(retrievedObject);
    console.log(dictOfProjects);
    showProjects(dictOfProjects);
  }
}

// addTaskToPage(dictOfProjects);
