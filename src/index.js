// import "./style.css";
import { getValues } from "./components/handleForm.js";
import { addQuery } from "./components/addProject.js";
let addtaskform = document.querySelector(".addtaskform");
addtaskform.addEventListener("submit", getValues, false);

let addProject = document.querySelector(".addproject");
addProject.addEventListener("click", addQuery, false);
