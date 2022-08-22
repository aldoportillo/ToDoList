//const content = document.getElementsByClassName("content")



export const renderForm = () => {
    const modal = document.createElement("div");
    modal.setAttribute("id", "myModal")
    const form = document.createElement('form')
    form.setAttribute("method", "post");
    form.setAttribute("action", "./createToDO.js");
    

    // Create and render title form
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title: "
    const title = document.createElement("input");
    title.setAttribute("type", "text")
    title.setAttribute("name", "title")
    title.setAttribute("placeholder", "title")
    title.setAttribute("id", "title")
    form.appendChild(titleLabel);
    form.appendChild(title);
    //create and render description form element
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description: "
    const description = document.createElement("input");
    description.setAttribute("type", "text")
    description.setAttribute("name", "description")
    description.setAttribute("placeholder", "description")
    description.setAttribute("id", "description")
    form.appendChild(descriptionLabel);
    form.appendChild(description);
    //create form element function
    const createFormElements = (formLabel, formLabelText, formFor, formBoxVar, formPlaceholder, type) => {
        formLabel = document.createElement('label');
        formLabel.setAttribute("for", formFor);
        formLabel.textContent = formLabelText;
        formBoxVar = document.createElement("input");
        formBoxVar.setAttribute("type", type)
        formBoxVar.setAttribute("name", formFor)
        formBoxVar.setAttribute("placeholder", formPlaceholder)
        formBoxVar.setAttribute("id", formFor)
        form.appendChild(formLabel);
        form.appendChild(formBoxVar);
    }
    

    createFormElements("dueDateLabel", "Due Date: ", "dueDate", "dueDate", "Due Date", "date" )
    createFormElements('priorityLabel', 'Priority: ', 'priority', 'priority', 'Priority', "text")
    createFormElements("checkList", "Checklist: ", "checkList", "checkList", "Checklist", "text")
    //content.appendChild(form)
    //Find a way to get the same content div that we created in init.js

    //Add submit button
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit")
    form.appendChild(submit);

    modal.appendChild(form)
    document.body.appendChild(modal)
}


