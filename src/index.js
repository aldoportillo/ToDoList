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



//New function that will create these and append them to card container

const card = document.createElement("div");
card.classList.add("card");

const title = document.createElement("h2");
title.textContent = "Homework"

const description = document.createElement("p")
description.textContent = "ipsum lorem impsum lore ipsum lorem ipsum lorem ipsum lorem ipsum lorem"


const dueDate = document.createElement("p");
dueDate.textContent = "Tomrrow!";

const priority = document.createElement("p");
priority.textContent = "high"

const checkList = document.createElement("p");
checkList.textContent = "true";

card.append(title, description, dueDate, priority, checkList)
cardContainer.appendChild(card)


content.appendChild(cardContainer);