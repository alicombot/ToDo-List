const menuList = document.querySelectorAll(".menu-list__item");
const titlepanelHead = document.querySelector(".panel__title");
const managelistWrappers = document.querySelectorAll(".manage-list__wrapper");
const chevronRight = document.querySelectorAll(".chevron-right");
const panelthemChange = document.querySelectorAll(".panel-them__change");
const panelContent = document.querySelectorAll(".panel__content");
const statusTask = document.querySelectorAll(".status-task__item");
const statusProject = document.querySelectorAll(".status-project__item");



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
        
        // if (!isActive) {
        //     const titlemanageList = this.querySelector(".manage-list__title");
        //     if (titlemanageList) {
        //         titlepanelHead.textContent = titlemanageList.textContent;
        //     }
        // }
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


statusProject.forEach(statusProject => {
    statusProject.addEventListener('click', function(){
        isActiveCurrent = document.querySelector(".status-project__item--active")
        isActive = this.lastChild;
        isActiveCurrent.classList.remove("status-project__item--active")
        isActive.classList.toggle("status-project__item--active")
    })
})