import './style.css';
import {blankProjectLoad} from './blankProjectLoad.js';
import {createToDo} from './createToDO'

    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("id", "content")

    const header = document.createElement("header");
    const headerText = document.createElement("h1");
    headerText.textContent = "To Do List";
    header.appendChild(headerText);
    content.appendChild(header);

    const projectsInfo = document.createElement("div");
    projectsInfo.textContent = blankProjectLoad().projectTitle;
    content.appendChild(projectsInfo);

    document.body.appendChild(content)


createToDo("Homework", "To do list", "08/20/22", "low", "false");

createToDo("Work", "Bartend", "Today", "Urgent", "false");

createToDo("Train", "MMA", "Tomorrow", "Top Priority", "false")
 

//Proved that my createToDO function returns objects using console.table on an array of toDos
//Rework toDO to create this function and be able to update it per request. 

import { renderForm } from './form';

renderForm();

const btnNew = document.createElement("button");
btnNew.textContent = "Add new task"

document.body.appendChild(btnNew)
//Opens modal
const modal = document.getElementById("myModal");
  
 // const span = document.getElementsByClassName("close")[0];
  
  btnNew.onclick = function() {
    modal.style.display = "block";
  }

  //Try to make container div with cards and styling inputs

  console.log("Am I in watchmode? Yes")

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
cardContainer.setAttribute("id", "cardContainer")


import {createCard} from './createCards';

const card1 = createCard("Homework", "ipsum lorem impsum lore ipsum lorem ipsum lorem ipsum lorem ipsum lorem", "Tomrrow!", "high", "true");

cardContainer.appendChild(card1)



content.appendChild(cardContainer);