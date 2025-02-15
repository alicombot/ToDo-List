const menuList = document.querySelectorAll(".menu-list__item");
const panelShow = document.querySelector(".panel--show");
const managelistWrapper = document.querySelectorAll(".manage-list__wrapper");
const chevronRight = document.querySelectorAll(".chevron-right");


menuList.forEach(menuList =>{
    menuList.addEventListener('click', function(){
        document.querySelector(".menu-list__item--active").classList.remove("menu-list__item--active")
        document.querySelector(".panel").classList.toggle("panel--close")
        this.classList.add('menu-list__item--active')
    })
})







managelistWrapper.forEach(managelistWrapper => {
    managelistWrapper.addEventListener('click', function(){
        document.querySelector(".manage-list--active").classList.remove("manage-list--active")
        this.classList.toggle('manage-list--active')
    })
})



