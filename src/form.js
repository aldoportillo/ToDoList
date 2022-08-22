//const content = document.getElementsByClassName("content")





export const renderForm = () => {
    const form = document.createElement('form')
    form.setAttribute("method", "post");
    //form.setAttribute("action", "");

    // Create and render title form
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title: "
    const title = document.createElement("input");
    title.setAttribute("type", "text")
    title.setAttribute("name", "title")
    title.setAttribute("placeholder", "title")
    form.appendChild(titleLabel);
    form.appendChild(title);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description: "
    const description = document.createElement("input");
    description.setAttribute("type", "text")
    description.setAttribute("name", "description")
    description.setAttribute("placeholder", "description")
    form.appendChild(descriptionLabel);
    form.appendChild(description);
    
    const createFormElements = (formLabel, formLabelText, formFor, formBoxVar, formPlaceholder, type) => {
        formLabel = document.createElement('label');
        formLabel.setAttribute("for", formFor);
        formLabel.textContent = formLabelText;
        formBoxVar = document.createElement("input");
        formBoxVar.setAttribute("type", type)
        formBoxVar.setAttribute("name", formFor)
        formBoxVar.setAttribute("placeholder", formPlaceholder)
        form.appendChild(formLabel);
        form.appendChild(formBoxVar);
    }
    

    createFormElements("dueDateLabel", "Due Date: ", "dueDate", "dueDate", "Due Date", "date" )
    createFormElements('priorityLabel', 'Priority: ', 'priority', 'priority', 'Priority', "text")
    createFormElements("checkList", "Checklist: ", "checkList", "checkList", "Checklist", "text")
    //content.appendChild(form)
    //Find a way to get the same content div that we created in init.js
    document.body.appendChild(form)
}


