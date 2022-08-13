export function createListContainer() {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    document.body.append(gridContainer);
}

//Create List item using classes

export class ListItem {
    constructor(complete, activity, date){
        this.complete = complete;
        this.activity = activity;
        this.date = date;
    }
    create(){
        const gridElement = document.createElement('div');
        gridElement.classList.add('list-item')

        const activity = document.createElement('h4');
        activity.textContent = this.activity;
        const date = document.createElement('p');
        date.textContent = this.date;

        gridElement.append(activity, date);

        return gridElement
    }
}

