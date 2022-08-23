let toDoArr = [];

export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    
    toDoArr.push({Title, Description, DueDate, Priority, CheckList})
    
    console.table(toDoArr);
    console.log("table rendered")
    return {Title, Description, DueDate, Priority, CheckList} // Maybe just return object for DOM Manipulation or return the Arr
}