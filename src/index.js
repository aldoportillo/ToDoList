import './style.css';
import {blankProjectLoad} from './blankProjectLoad.js';
import {initDomManipulation} from './initDomManipulation';

import {createToDo} from './createToDO'

blankProjectLoad();

initDomManipulation();

createToDo("Homework", "To do list", "08/20/22", "low", "false");

createToDo("Work", "Bartend", "Today", "Urgent", "false");

createToDo("Train", "MMA", "Tomorrow", "Top Priority", "false")
 

//Proved that my createToDO function returns objects using console.table on an array of toDos
//Rework toDO to create this function and be able to update it per request. 
