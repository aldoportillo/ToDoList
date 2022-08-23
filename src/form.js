
export const renderForm = () => {
    const content = document.getElementById("content")

    const modal = document.createElement("div");
    modal.setAttribute("id", "myModal")
    const form = document.createElement('form')
    form.setAttribute("method", "post");
    form.setAttribute("action", "../dist/index.html");
    
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
    createFormElements("titleLabel", "Title: ", "title", "title", "Title", "title");
    createFormElements("descriptionLabel", "Description: ", "description", "description", "Description", "description")
    createFormElements("dueDateLabel", "Due Date: ", "dueDate", "dueDate", "Due Date", "date" )
    createFormElements('priorityLabel', 'Priority: ', 'priority', 'priority', 'Priority', "text")
    createFormElements("checkList", "Checklist: ", "checkList", "checkList", "Checklist", "text")
    //content.appendChild(form)
    //Find a way to get the same content div that we created in init.js

    modal.appendChild(form)

    //Add submit button
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit")
    submit.textContent = "Add Task";

    
    // submit.addEventListener('click', () => {
        
    //     createToDo(document.querySelector("#title").value, document.querySelector('#description').value, document.querySelector('#dueDate').value, document.querySelector('#priority').value, document.querySelector('#checkList').value )
    //     console.log("Submit from form.js");
    //     createCard(document.querySelector("#title").value, document.querySelector('#description').value, document.querySelector('#dueDate').value, document.querySelector('#priority').value, document.querySelector('#checkList').value)
    //     //cardContainer.appendChild(createCard("Homework", "ipsum lorem impsum lore ipsum lorem ipsum lorem ipsum lorem ipsum lorem", "Tomrrow!", "high", "true"))

    // });

    modal.appendChild(submit);


    
    content.appendChild(modal)

    return content
}


