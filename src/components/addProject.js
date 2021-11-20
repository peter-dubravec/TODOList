import { validateProjectForm } from "./formValidation.js";
import { todoObj, taskList } from "./todoObj.js";
import { showProjectTasks } from "./showProjectTasks.js";

let addProject = document.querySelector(".addproject");
let projects = document.querySelector(".projects");

function hideAddProject(e) {
  let projectdiv = document.querySelector(".projectdiv");
  projectdiv.parentNode.removeChild(projectdiv);
  addProject.style.display = "block";
}

//idk how to continue
let dictOfProjects = {};
function createList(projectInput) {
  dictOfProjects[projectInput] = [];
}

function showTasksInProject() {
  let nameOfProject = document.querySelector("h2");
  let keyInDict = this.firstChild.textContent;

  nameOfProject.textContent = keyInDict;
  // dictOfProjects[keyInDict].push("ahoj", "cau", "kraska", "2");

  let title = "ahoj";
  let description = "cau";
  let dueDate = "kraska";
  let priority = "2";
  todoObj(title, description, dueDate, priority, dictOfProjects[keyInDict]);

  showProjectTasks(dictOfProjects[keyInDict]);
}

function showProjects() {
  removeProjectsFromDOM();
  for (let key in dictOfProjects) {
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

function removeProjectFromDict(e) {
  let key = e.target.getAttribute("data-delete");
  delete dictOfProjects[key];
  showProjects();
}

function removeProjectsFromDOM() {
  let projects = document.querySelectorAll(".addedproject");
  projects.forEach((project) => {
    project.parentNode.removeChild(project);
  });
}

function addProjectToDOM(e) {
  let projectInput = document.getElementById("projectinput").value;

  createList(projectInput);

  if (validateProjectForm(projectInput)) {
    hideAddProject();
    showProjects();
  }
}

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

export { addQuery, dictOfProjects };
