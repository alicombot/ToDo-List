const menuList = document.querySelectorAll(".menu-list__item");
const managelistWrapper = document.querySelectorAll(".manage-list__wrapper");
const chevronRight = document.querySelectorAll(".chevron-right");
const panelthemChange = document.querySelectorAll(".panel-them__change");
const panelContent = document.querySelectorAll(".panel__content");




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






managelistWrapper.forEach(managelistWrapper => {
    managelistWrapper.addEventListener('click', function(){
        this.classList.toggle('manage-list--active')
    })
})


panelthemChange.forEach(panelthemChange => {
    panelthemChange.addEventListener('click', function(){
        document.querySelector(".panel-them--active").classList.remove("panel-them--active")
        this.classList.add("panel-them--active")
    })
})



