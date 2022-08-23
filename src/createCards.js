//const cardContainer = document.getElementById("cardContainer")

export const createCard = (titleParam, descriptionParam, dateParam, priorityParam, checkListParam) => {
    //New function that will create these and append them to card container

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = titleParam;

    const description = document.createElement("p")
    description.textContent = descriptionParam;

    const dueDate = document.createElement("p");
    dueDate.textContent = dateParam;

    const priority = document.createElement("p");
    priority.textContent = priorityParam

    const checkList = document.createElement("p");
    checkList.textContent = checkListParam;

    card.append(title, description, dueDate, priority, checkList)
    
    return card
}