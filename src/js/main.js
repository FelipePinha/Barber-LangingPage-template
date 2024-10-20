const openMenuBtn = document.querySelector('#open-menu')
const closeMenuBtn = document.querySelector('#close-menu')
const mobileMenu = document.querySelector('#mobile-menu')
const header = document.querySelector('#header')
const banner = document.querySelector('#banner')

const openMenu = () => {
    mobileMenu.classList.add('menu-open')
}

const closeMenu = () => {
    mobileMenu.classList.remove('menu-open')
}

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            header.classList.add('header-scrolled')
        } else {
            header.classList.remove('header-scrolled')
        }
    })
}

const options = {
    root: null,
    threshold: 0.5,
}
const observer = new IntersectionObserver(observerCallback, options)

observer.observe(banner)

openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)