import add from '../assets/format-list-group-plus.png'

export function addFile() {

    const circle = document.createElement('div');
    circle.classList.add('circle');
    const myIcon = new Image();
    myIcon.src = add;

    circle.appendChild(myIcon);
    document.body.appendChild(circle);

}