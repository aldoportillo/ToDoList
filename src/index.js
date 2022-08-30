const header = document.createElement('header')
const title = document.createElement('h1');
title.textContent = "TO DO LIST"
header.appendChild(title);
const newButton = document.createElement('button')
newButton.textContent = "New To Do"
header.appendChild(newButton);
document.body.appendChild(header)
//All sidebar woek
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
const listsContainer = document.createElement('div');
listsContainer.classList.add('lists-conatiner')


let lists = [];

function render() {
    clearElement(listsContainer)

    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add("list-name")
        listElement.classList.listId = lists.id;
        listElement.innerText = list.name;
        listsContainer.appendChild(listElement)
    })
}

const clearElement = (element) => {
    while(element.firstChild){
        element.removeChild.firstChild
    }
}
//render()

//form
const newListForm = document.createElement('form');
newListForm.setAttribute("data-new-list-form", "")
const newListInput = document.createElement('input');
newListInput.setAttribute("type", "text");
newListInput.setAttribute("data-new-list-input", "")
const submitButton = document.createElement('button')
newListForm.append(newListInput, submitButton);

sidebar.appendChild(listsContainer)
sidebar.appendChild(newListForm);
document.body.appendChild(sidebar)

newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName) {
        const list = createList(listName)
        newListInput.value = null
        lists.push(list)
        render()}
})

const createList = (names) => {
    return {id: Date.now().toString(), name: names, tasks: []}
}
//All Card Container work
const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');






    class Card {
        constructor(taskInput, dateInput) {
            this.taskInput = taskInput;
            this.dateInput = dateInput;
        }
        createDOM() {
            const close = document.createElement('span');
            close.textContent = "x"
            close.classList.add('close')
            close.addEventListener('click', () => {
                console.log("hello world")
                close.parentElement.remove();
            });
            const card = document.createElement('div')
            card.classList.add('card1')

            const task = document.createElement('h3')
            task.textContent = this.taskInput
            const date = document.createElement('h3')
            date.textContent = this.dateInput

            card.append(close, task, date)

            cardContainer.appendChild(card);
        }

    }


document.body.appendChild(cardContainer);

let card1 = new Card("CODE", "TOMORROW")
let card2 = new Card("WORK", "WEDNESDAY")

card1.createDOM()
card2.createDOM()

newButton.addEventListener('click', () => {
    card2.createDOM()
})