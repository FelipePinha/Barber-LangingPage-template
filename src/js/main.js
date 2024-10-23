const mobileMenu = document.querySelector('#mobile-menu')
const banner = document.querySelector('#banner')

const openMenu = () => {
    mobileMenu.classList.add('menu-open')
}

const closeMenu = () => {
    mobileMenu.classList.remove('menu-open')
}

const clearError = () => {
    const error = document.querySelector('#error')
    error.textContent = ''
}

const handleGetFormValues = () => {
    const name = document.querySelector('#name').value
    const message = document.querySelector('#message').value

    if(typeof name !== 'string' || name === '') {
        const error = document.querySelector('#error')
        error.textContent = "*Preencha todos os campos"
        return null
    }

    if(typeof message !== 'string' || message === '') {
        const errorSate = document.querySelector('#error')
        errorSate.textContent = "*Preencha todos os campos"
        return null
    }

    return {
        name,
        message
    }
}

const handleFormSubmit = (event) => {
    event.preventDefault()

    const formData = handleGetFormValues()
    

    if(!formData) {
        return
    } else {
        clearError()
    }

    const phoneNumber = "+5511981428501"
    const url = `https://wa.me/${phoneNumber}?text=Olá, meu nome é *${formData.name}*.%0a%0a${formData.message}`

    window.open(url, '_blank')
}

const observerCallback = (entries) => {
    const header = document.querySelector('#header')

    entries.forEach(entry => {
        if(entry.isIntersecting) {
            header.classList.add('header-scrolled')
        } else {
            header.classList.remove('header-scrolled')
        }
    })
}

const observerOptions = {
    root: null,
    threshold: 0.5,
}
const observer = new IntersectionObserver(observerCallback, observerOptions)
observer.observe(banner)

document.querySelector('#open-menu').addEventListener('click', openMenu)
document.querySelector('#close-menu').addEventListener('click', closeMenu)
document.querySelector('#form').addEventListener('submit', handleFormSubmit)