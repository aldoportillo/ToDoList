import './style.css';
import { createHeader } from './DOM/header';
import {createSidebar } from './DOM/sidebar'
import {createListContainer, ListItem} from './DOM/list'

createHeader();
createSidebar();
createListContainer();

const gridContainer = document.querySelector('.grid-container')
//gridContainer.append(createListItem());

//call it

let listItem1 = new ListItem(false, "Code", "8/13");
gridContainer.append(listItem1.create());