export function createSidebar() {

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');   
  
    const homeTab = document.createElement('div');
    homeTab.textContent="Home"
    homeTab.classList.add('home');
    sidebar.appendChild(homeTab);

    const todayTab = document.createElement('div');
    todayTab.textContent="Today"
    todayTab.classList.add('today');
    sidebar.appendChild(todayTab);

    const weekTab = document.createElement('div');
    weekTab.textContent="Week"
    weekTab.classList.add('week');
    sidebar.appendChild(weekTab);

    const projectHead = document.createElement('h3');
    projectHead.textContent = "Projects"
    projectHead.classList.add('projects-title');
    sidebar.appendChild(projectHead);
    
    document.body.appendChild(sidebar);
}

//Maybe create another modulew that takes in an event handler that creates new projects.