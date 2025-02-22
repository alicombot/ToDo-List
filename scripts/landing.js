const menuItems = document.querySelectorAll('.menu__item')





function removeActiveClass(className){
    document.querySelector(`.${className}`).classList.remove(className)
}



menuItems.forEach(item => {
    item.addEventListener("click",function (e){
        e.preventDefault()
        removeActiveClass('menu__item--active')
        item.classList.add("menu__item--active")

        let sectionClass = item.getAttribute("data-section")
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop

        window.scrollTo({
            top: sectionOffsetTop,
            behavior : "smooth"
        })

    })
}) 