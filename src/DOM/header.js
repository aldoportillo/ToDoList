import Icon from '../assets/checkbox-marked-circle-plus-outline.png'

export function createHeader() {

    const header = document.createElement('header');
    header.classList.add('header');
    const myIcon = new Image();
    myIcon.src = Icon;
    const headerTitle = document.createElement('div');
    headerTitle.textContent = "To Do List";
    
    
    header.appendChild(myIcon);
    
    header.appendChild(headerTitle)
    
    document.body.appendChild(header);
}