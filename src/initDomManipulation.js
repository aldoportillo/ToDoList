import { blankProjectLoad } from "./blankProjectLoad";

export const initDomManipulation = () => {

    const content = document.createElement("div");
    content.classList.add("content");

    const header = document.createElement("header");
    const headerText = document.createElement("h1");
    headerText.textContent = "To Do List";
    header.appendChild(headerText);
    content.appendChild(header);

    const projectsInfo = document.createElement("div");
    projectsInfo.textContent = blankProjectLoad().projectTitle;
    content.appendChild(projectsInfo);

    document.body.appendChild(content)
}