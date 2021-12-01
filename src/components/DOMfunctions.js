import { removeFromObj } from "./objectFunctions.js";
import { dictOfProjects } from "../index.js";
let removedElement = false;

function removeToDo(e) {
  let project = document.querySelector("h2").textContent;
  let index = e.target.getAttribute("data-delete");
  let tasks = document.querySelector(".tasks");
  let updatedDict = removeFromObj(project, index);

  tasks.removeChild(tasks.lastChild);
  removedElement = true;
  document.querySelectorAll(".wrapper").forEach((task) => {
    let parent = task.parentNode;
    parent.removeChild(task);
  });
  addTaskToPage(updatedDict);
}

function rollDown(e) {
  if (removedElement == false) {
    let element;
    if (e.target.className == "actualtaskdiv") {
      element = e.target;
    } else {
      element = e.target.parentNode;
    }

    let descriptionDiv = document.querySelectorAll(".descriptiondiv");

    let index = element.getAttribute("data-index");
    if (
      descriptionDiv[index].style.display == "" ||
      descriptionDiv[index].style.display == "none"
    ) {
      descriptionDiv[index].style.display = "block";
    } else {
      descriptionDiv[index].style.display = "none";
    }
  } else {
    removedElement = false;
  }
}

function clearToDoList() {
  let tasks = document.querySelector(".tasks");
  if (tasks.childNodes.length > 0) {
    while (tasks.childNodes.length > 0) {
      tasks.removeChild(tasks.firstChild);
    }
  }
}

function addTaskToPage(taskList) {
  let tasks = document.querySelector(".tasks");
  let addTaskButton = document.createElement("button");
  let buttonDiv = document.createElement("div");
  buttonDiv.className = "buttondiv";
  addTaskButton.textContent = "AddTask";
  addTaskButton.className = "addtaskbutton";
  for (let i in taskList) {
    let wrapperDiv = document.createElement("div");
    let descriptionDiv = document.createElement("div");
    wrapperDiv.className = "wrapper";
    let div = document.createElement("div");
    div.className = "actualtaskdiv";
    div.setAttribute("data-index", i);
    let closeBtn = document.createElement("button");
    closeBtn.className = "btn-close";
    closeBtn.setAttribute("data-delete", `${i}`);

    div.addEventListener("click", rollDown);
    closeBtn.addEventListener("click", removeToDo);
    for (let j in taskList[i]) {
      if (j != "description") {
        let divForEachElement = document.createElement("div");
        divForEachElement.className = "divforeachelement";
        divForEachElement.append(taskList[i][j]);
        div.append(divForEachElement, closeBtn);
        wrapperDiv.append(div);
      } else {
        descriptionDiv.className = "descriptiondiv";
        descriptionDiv.innerHTML = `<span>Description: </span><p>${taskList[i][j]}</p>`;
      }
    }
    wrapperDiv.append(descriptionDiv);
    tasks.append(wrapperDiv);
  }
  addTaskButton.addEventListener("click", hideTasks);
  buttonDiv.append(addTaskButton);
  tasks.append(buttonDiv);
}

// -----//

function displayOrHideForm(action) {
  document.querySelector(".todos").style.display = action;
}

function displayOrHideToDo(action) {
  document.querySelector(".addedtodo").style.display = action;
}

function hideTasks() {
  displayOrHideToDo("none");
  displayOrHideForm("block");
}

function displayCurrentTasks() {
  document.querySelector("h2").textContent = "Current";
  clearToDoList();
  addTaskToPage(dictOfProjects["Current"]);
  displayOrHideForm("none");
  displayOrHideToDo("flex");
}

function handlePopUp(action, key) {
  document.querySelector(".popupproject").textContent = `${key}`;
  document.querySelector(".popup").style.display = action;
}

function toggleClasses() {
  const burger = document.querySelector(".burger");
  const actions = document.querySelector(".actions");
  const projects = document.querySelector(".projects");
  burger.classList.toggle("toggle");
  burger.classList.toggle("burger-active");
  actions.classList.toggle("actions-active");
  projects.classList.toggle("project-active");
}

function toggleBurgerButton() {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", toggleClasses);
}

//--//

export {
  displayOrHideForm,
  addTaskToPage,
  displayOrHideToDo,
  clearToDoList,
  displayCurrentTasks,
  handlePopUp,
  toggleBurgerButton,
};
