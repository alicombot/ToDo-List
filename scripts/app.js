const menuList = document.querySelectorAll(".menu-list__item");
const panelShow = document.querySelector(".panel--show")


menuList.forEach(menuList =>{
    menuList.addEventListener('click', function(){
        document.querySelector(".menu-list__item--active").classList.remove("menu-list__item--active")
        document.querySelector(".panel").classList.toggle("panel--close")
        this.classList.add('menu-list__item--active')
    })
})
