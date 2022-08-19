let toDoArr = [];

export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    console.log("Called Create to do function")
    console.log({Title, Description, DueDate, Priority, CheckList});
    console.log("push opbject to arr")
    toDoArr.push({Title, Description, DueDate, Priority, CheckList})
    console.log("verify object contains it")
    console.log(toDoArr);
    return toDoArr // Maybe just return object for DOM Manipulation
}