const menuList = document.querySelectorAll(".menu-list__item");
const titlepanelHead = document.querySelector(".panel__title");
const managelistWrappers = document.querySelectorAll(".manage-list__wrapper");
const chevronRight = document.querySelectorAll(".chevron-right");
const panelthemChange = document.querySelectorAll(".panel-them__change");
const panelContent = document.querySelectorAll(".panel__content");
const statusTask = document.querySelectorAll(".status-task__item");
const statusProject = document.querySelectorAll(".status-project__item");
const addProject = document.querySelector(".panel__svg");


menuList.forEach(item => {
    item.addEventListener('click', function() {
        let contentId = this.getAttribute("data-content-id");
        let contentElement = document.querySelector(contentId);
        let activeItem = document.querySelector(".menu-list__item--active");
        let activeContent = document.querySelector(".panel__content.content--show");

    
        if (activeItem === this) {
            this.classList.remove("menu-list__item--active");
            activeContent?.classList.remove("content--show");
            document.querySelector(".panel").classList.add("paenl--close");
            document.querySelector(".wrapper").classList.remove("wrapper--close")
        } else {
           
            activeItem?.classList.remove("menu-list__item--active");
            activeContent?.classList.remove("content--show");

        
            this.classList.add("menu-list__item--active");
            contentElement?.classList.add("content--show");
            document.querySelector(".panel").classList.remove("paenl--close");
            document.querySelector(".wrapper").classList.add("wrapper--close")
        }
    });
});






managelistWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains("manage-list--active"); 
        this.classList.toggle("manage-list--active");
        content.classList.toggle("manage-list__content--active");
        
        if (!isActive) {
            const titlemanageList = this.querySelector(".manage-list__title");
            if (titlemanageList) {
                titlepanelHead.textContent = titlemanageList.textContent;
            }
        }
    });
});






panelthemChange.forEach(panelthemChange => {
    panelthemChange.addEventListener('click', function(){
        document.querySelector(".panel-them--active").classList.remove("panel-them--active")
        this.classList.add("panel-them--active")
    })
})



statusTask.forEach(statusTask => {
    statusTask.addEventListener('click', function(){
        isActiveCurrent = document.querySelector(".status-task__item--active")
        isActive = this.lastChild;
        isActiveCurrent.classList.remove("status-task__item--active")
        isActive.classList.toggle("status-task__item--active")
    })
})




function toggleSortOptions() {
    const sortOptions = document.getElementById('sort-options');
    if (sortOptions.style.display === 'none' || sortOptions.style.display === '') {
        sortOptions.style.display = 'block';
    } else {
        sortOptions.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    const sortWrapper = document.querySelector('.sort__wrapper');
    const sortOptions = document.getElementById('sort-options');

    if (sortOptions && !sortWrapper.contains(event.target)){
        sortOptions.style.display = 'none';
    }

});

function selectOption(option) {
    alert("You selected: " + option);
    document.getElementById("sort-options").style.display = "none";
}




function toggleActions(taskId) {

    const allMenus = document.querySelectorAll('.task-options');
    allMenus.forEach(menu => {
      menu.style.display = 'none';
    });
  

    const menu = document.getElementById(`task-options-${taskId}`);
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }




  document.addEventListener('click', function(event) {

    if (!event.target.matches('.task__title--icon')) {
      const allMenus = document.querySelectorAll('.task-options');
      allMenus.forEach(menu => {
        menu.style.display = 'none';
      });
    }

  });
  


  




addProject.addEventListener('click', function () {
    const addList = document.querySelector(".status-task");

    if (addList.querySelector(".add-project")) {
        return;
    }

    const newProject = document.createElement('li');
    const text = document.createElement('input');
    text.classList.add("add-project");

    text.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && text.value.trim() !== '') {
            text.remove();
            const value = text.value;
            const item = document.createElement('span');
            item.classList = ''
            item.textContent = value;
            newProject.appendChild(item);
        }
    });

    newProject.classList.add("status-project__item");
    newProject.appendChild(text);
    addList.appendChild(newProject);
    text.scrollIntoView({ behavior: 'smooth', block: 'center' });
    text.focus();
});



const taskList = document.querySelector('.status-task');
taskList.addEventListener('click', function(event) {
   
    if (event.target && event.target.tagName === 'SPAN') {
      
        const allSpans = taskList.querySelectorAll('span');
        allSpans.forEach(span => {
            span.classList.remove('status-project__item--active');
        });

        
        event.target.classList.add('status-project__item--active');
    }
});
