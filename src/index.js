const header = document.createElement('header')
const title = document.createElement('h1');
title.textContent = "TO DO LIST"
header.appendChild(title);
const newButton = document.createElement('button')
newButton.textContent = "New To Do"
header.appendChild(newButton);
document.body.appendChild(header)

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