const menuList = document.querySelectorAll(".menu-list__item");
const panelShow = document.querySelector(".panel--show");
const managelistWrapper = document.querySelectorAll(".manage-list__wrapper");
const chevronRight = document.querySelectorAll(".chevron-right");
const panelthemChange = document.querySelectorAll(".panel-them__change");


menuList.forEach(menuList =>{
    menuList.addEventListener('click', function(){
        document.querySelector(".menu-list__item--active").classList.remove("menu-list__item--active")
        document.querySelector(".panel").classList.toggle("panel--close")
        document.querySelector(".wrapper").classList.toggle("wrapper--close")
        this.classList.add('menu-list__item--active')
    })
})


managelistWrapper.forEach(managelistWrapper => {
    managelistWrapper.addEventListener('click', function(){
        this.classList.toggle('manage-list--active')
    })
})




console.log(panelthemChange)
panelthemChange.forEach(panelthemChange => {
    panelthemChange.addEventListener('click', function(){
        document.querySelector(".panel-them--active").classList.remove("panel-them--active")
        this.classList.add("panel-them--active")
    })
})