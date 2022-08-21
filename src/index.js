import './style.css';
import {blankProjectLoad} from './blankProjectLoad.js';
import {initDomManipulation} from './initDomManipulation';

import {createToDo} from './createToDO'

blankProjectLoad();

initDomManipulation();

let toDoTable = [];

const firstItem = createToDo("Homework", "To do list", "08/20/22", "low", "false");
toDoTable.push(firstItem);
const secondItem = createToDo("Work", "Bartend", "Today", "Urgent", "false");
toDoTable.push(secondItem);
const thirdItem = createToDo("Train", "MMA", "Tomorrow", "Top Priority", "false")
toDoTable.push(thirdItem);
console.log(firstItem)
console.log(firstItem.Title)
console.table(toDoTable)