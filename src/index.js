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


cardContainer.appendChild(createCard("Homework", "ipsum lorem impsum lore ipsum lorem ipsum lorem ipsum lorem ipsum lorem", "Tomrrow!", "high", "true"));

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
        
  let array = createToDo(document.querySelector("#title").value, document.querySelector('#description').value, document.querySelector('#dueDate').value, document.querySelector('#priority').value, document.querySelector('#checkList').value )
  console.log(`Look at this object array ${array}`);
  
  for (let i = 0; i < array.length; i++){
    cardContainer.appendChild(createCard(document.querySelector("#title").value, document.querySelector('#description').value, document.querySelector('#dueDate').value, document.querySelector('#priority').value, document.querySelector('#checkList').value))
  }

  //cardContainer.appendChild(createCard(document.querySelector("#title").value, document.querySelector('#description').value, document.querySelector('#dueDate').value, document.querySelector('#priority').value, document.querySelector('#checkList').value))
  
})


content.appendChild(cardContainer);