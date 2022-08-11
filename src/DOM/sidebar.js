export function createSidebar() {

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
  
    const homeTab = document.createElement('div');
    homeTab.textContent="Home"
    sidebar.appendChild(homeTab);

    const todayTab = document.createElement('div');
    todayTab.textContent="Today"
    sidebar.appendChild(todayTab);

     const weekTab = document.createElement('div');
     weekTab.textContent="Week"
     sidebar.appendChild(weekTab);
    
    
    document.body.appendChild(sidebar);
}