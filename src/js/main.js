const openMenuBtn = document.querySelector('#open-menu')
const closeMenuBtn = document.querySelector('#close-menu')
const mobileMenu = document.querySelector('#mobile-menu')

const openMenu = () => {
    mobileMenu.classList.add('menu-open')
}

const closeMenu = () => {
    mobileMenu.classList.remove('menu-open')
}

openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)