// Create object from values from Form, add them to the list

let taskList = [];

function createObject(title, description, duedate, priority) {
  return { title, description, duedate, priority };
}

function todoObj(title, description, duedate, priority) {
  let obj = createObject(title, description, duedate, priority);
  taskList.push(obj);
}

function removeFromObj(index) {
  taskList.splice(index, 1);
  return taskList;
}

export { todoObj, taskList, removeFromObj};
