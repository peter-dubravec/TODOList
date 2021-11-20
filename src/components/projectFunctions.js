import { validateProjectForm } from "./formValidation.js";
import {
  addTaskToPage,
  displayOrHideForm,
  displayOrHideToDo,
  clearToDoList,
  displayCurrentTasks,
} from "./DOMfunctions.js";
import { dictOfProjects } from "../index.js";

let addProject = document.querySelector(".addproject");
let projects = document.querySelector(".projects");

function hideAddProject(e) {
  let projectdiv = document.querySelector(".projectdiv");
  projectdiv.parentNode.removeChild(projectdiv);
  addProject.style.display = "block";
}

function createList(projectName) {
  dictOfProjects[projectName] = [];
  localStorage.setItem("projects", JSON.stringify(dictOfProjects));
  clearToDoList();
  addTaskToPage(dictOfProjects[projectName]);
}

function showTasksInProject() {
  if (removedProject == false) {
    let nameOfProject = document.querySelector("h2");
    let projectName = this.firstChild.textContent;
    nameOfProject.textContent = projectName;
    displayOrHideForm("none");
    displayOrHideToDo("block");
    clearToDoList();
    addTaskToPage(dictOfProjects[projectName]);
  } else {
    removedProject = false;
  }
}

// this shows all projects in the sidebar
function showProjects() {
  removeProjectsFromDOM();
  for (let key in dictOfProjects) {
    if (key != "Current") {
      let addedProjectLeft = document.createElement("div");
      let addedProject = document.createElement("div");
      let btn = document.createElement("button");
      addedProjectLeft.innerHTML = `<i class="fas fa-tasks"></i>`;
      addedProjectLeft.append(key);
      addedProjectLeft.className = "addedprojectleft";
      btn.className = "btn btn-close";
      btn.setAttribute("data-delete", key);
      addedProject.append(addedProjectLeft, btn);
      addedProject.className = "addedproject";
      projects.insertBefore(addedProject, addProject);
      addedProject.addEventListener("click", showTasksInProject);
      btn.addEventListener("click", removeProjectFromDict);
    }
  }
}

let removedProject;
//this function delete todo obj from project obj
function removeProjectFromDict(e) {
  let key = e.target.getAttribute("data-delete");
  delete dictOfProjects[key];
  localStorage.setItem("projects", JSON.stringify(dictOfProjects));
  removedProject = true;
  showProjects();
  displayCurrentTasks();
}

// this function removes project from DOM
function removeProjectsFromDOM() {
  let projects = document.querySelectorAll(".addedproject");
  projects.forEach((project) => {
    project.parentNode.removeChild(project);
  });
}

function addProjectToDOM(e) {
  let projectName = document.getElementById("projectinput").value;
  createList(projectName);
  document.querySelector("h2").textContent = projectName;
  if (validateProjectForm(projectName)) {
    hideAddProject();
    showProjects();
  }
}

// This function is showing that add project form on the side
function addQuery(e) {
  addProject.style.display = "none";

  let divProject = document.createElement("div");
  let input = document.createElement("input");
  input.setAttribute("placeholder", "Project name");

  let btnAdd = document.createElement("button");
  btnAdd.className = "btnadd";
  btnAdd.textContent = "Add";
  let btnCancel = document.createElement("button");
  btnCancel.className = "btncancel";
  btnCancel.textContent = "Cancel";
  let btnDiv = document.createElement("div");
  btnDiv.className = "btndiv";
  btnDiv.append(btnAdd, btnCancel);

  input.setAttribute("type", "text");
  input.setAttribute("id", "projectinput");

  divProject.className = "projectdiv";
  divProject.append(input, btnDiv);
  projects.append(divProject);
  btnAdd.addEventListener("click", addProjectToDOM);
  btnCancel.addEventListener("click", hideAddProject);
}

export { addQuery, showProjects };
