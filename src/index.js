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
sidebar.appendChild(listsContainer)

let lists = [
    {
        id: 1, 
        name: 'homework', 
    }, {
        id: 2,
        name: 'job work',
    }, {
        id: 3,
        name: 'tqchniques',
    }];

function render() {
    clearElement(listsContainer)

    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add("list-name")
        listElement.dataset.listID = lists.id;
        listElement.innerText = list.name;
        listsContainer.appendChild(listElement)
    })
}

const clearElement = (element) => {
    while(element.firstChild){
        element.removeChild.firstChild
    }
}
render()

document.body.appendChild(sidebar)


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