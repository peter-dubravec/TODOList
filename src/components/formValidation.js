import { dictOfProjects } from "../index.js";
// Validation of Form, and displaying and removing alert-danger div

function addWarning(nodeName, selector) {
  let div = document.createElement("div");
  div.textContent = `Please insert ${nodeName}`;
  div.className = "alert alert-danger";
  document.querySelector(`${selector}`).after(div);
}

function validateProjectForm(projectInput) {
  checkIfDangerDisplayed();
  if (projectInput in dictOfProjects) {
    alert("Project already exists! Try different name!");
    return;
  }
  if (projectInput == "") {
    addWarning("project", "#projectinput");
    return false;
  }
  return true;
}

function checkIfDangerDisplayed() {
  let dangerAlreadyDisplayed = document.querySelectorAll(".alert-danger");
  if (dangerAlreadyDisplayed.length > 0) {
    dangerAlreadyDisplayed.forEach((div) => {
      div.parentNode.removeChild(div);
    });
  }
}

function validateData(title, description, date, priority) {
  checkIfDangerDisplayed();

  let invalid = 0;
  if (title.value == "") {
    addWarning("title", "#title");
    invalid += 1;
  }
  if (description.value == "") {
    addWarning("description", "#description");
    invalid += 1;
  }
  if (date.value == "") {
    addWarning("date", "#duedate");
    invalid += 1;
  }
  if (priority.value == "Select value") {
    addWarning("priority", "#priority");
    invalid += 1;
  }
  return invalid;
}

export { validateData, validateProjectForm };
