export const blankProjectLoad = () => {

    console.log("blank project load init");

    let projectArr = [];
    console.log("Push the title name of project to project array")

    let projectTitle = "Blank Project";
    projectArr.push({projectTitle})

    console.log(projectArr)

    return {projectArr, projectTitle}
}