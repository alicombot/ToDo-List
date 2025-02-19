const menuList = document.querySelectorAll(".menu-list__item");
const managelistWrapper = document.querySelectorAll(".manage-list__wrapper");
const chevronRight = document.querySelectorAll(".chevron-right");
const panelthemChange = document.querySelectorAll(".panel-them__change");
const panelContent = document.querySelectorAll(".panel__content");


menuList.forEach(item => {
    item.addEventListener('click', function() {
        let contentId = this.getAttribute("data-content-id");
        
        
        document.querySelector(".menu-list__item--active")?.classList.remove("menu-list__item--active");
        document.querySelector(".panel__content.content--show")?.classList.remove("content--show");

        
        document.querySelector(".panel").classList.toggle("panel--close");
        document.querySelector(".wrapper").classList.toggle("wrapper--close");

        
        this.classList.add('menu-list__item--active');



        let contentElement = document.querySelector(contentId);
        if (contentElement && !contentElement.classList.contains("content--show")) {
            contentElement.classList.add("content--show");
        }
    });
});

document.querySelector(".panel").addEventListener("transitionend", () => {
    if (document.querySelector(".panel").classList.contains("panel--close")) {
        document.querySelector(".menu-list__item--active")?.classList.remove("menu-list__item--active");
        document.querySelector(".panel__content.content--show")?.classList.remove("content--show");
    }
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


