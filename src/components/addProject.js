let addProject = document.querySelector(".addproject");
let projects = document.querySelector(".projects");

function hideAddProject(e) {
  let projectdiv = document.querySelector(".projectdiv");
  projectdiv.parentNode.removeChild(projectdiv);
  addProject.style.display = "block";
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
  btnCancel.addEventListener("click", hideAddProject);
}

export { addQuery };
