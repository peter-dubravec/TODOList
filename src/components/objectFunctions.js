import { dictOfProjects } from "../index.js";

// Create object from values from Form, add them to the list
function createObject(title, description, duedate, priority) {
  return { title, description, duedate, priority };
}

function todoObj(title, description, duedate, priority, whichProject) {
  let obj = createObject(title, description, duedate, priority);
  dictOfProjects[whichProject].push(obj);
  localStorage.setItem("projects", JSON.stringify(dictOfProjects));
}

function removeFromObj(project, index) {
  dictOfProjects[project].splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(dictOfProjects));
  return dictOfProjects[project];
}

export { todoObj, removeFromObj };
