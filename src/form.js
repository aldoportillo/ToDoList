//const content = document.getElementsByClassName("content")

export const renderForm = () => {
    const form = document.createElement('form')
    form.setAttribute("method", "post");
    //form.setAttribute("action", "");

    const title = document.createElement("input");
    title.setAttribute("type", "text")
    title.setAttribute("name", "title")
    title.setAttribute("placeholder", "title")
    //Add labels if render
    console.log("form render is called")

    form.appendChild(title);
    //content.appendChild(form)
    //Find a way to get the same content div that we created in init.js
    document.body.appendChild(form)
}