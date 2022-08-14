import './style.css';
import { createHeader } from './DOM/header';
import {createSidebar } from './DOM/sidebar'
import {createListContainer, ListItem} from './DOM/list'
import {addFile} from './DOM/addFile'

createHeader();
createSidebar();
createListContainer();

const gridContainer = document.querySelector('.grid-container')


let listItem1 = new ListItem(false, "Code", "8/13");
gridContainer.append(listItem1.create());
gridContainer.append(listItem1.create());
gridContainer.append(listItem1.create());
let listItem2 = new ListItem(true, "Sleep", "8/12")
gridContainer.append(listItem2.create());

gridContainer.append(addFile());
//I can probably add the logic for button press on this document. 

//Next Create a button that listens for new project and opens up modal
//modal sends input to the class

//FInd a  way to organize