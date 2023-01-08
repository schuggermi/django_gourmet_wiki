let navbarToggler = document.querySelector('#navbar-toggler')
let navbarDropdown = document.querySelector('#navbar-dropdown')
let navbarProfile = document.querySelectorAll('.navbar-profile')

const togglerJumpingIn = [
    { transform: 'translateY(-3px)' },
]

const togglerJumpingOut = [
    { transform: 'translateY(3px)' },
]

const togglerTiming = {
    duration: 300,
    fill: 'forwards',
}

navbarDropdown.style.offsetHeight = 0

navbarToggler.addEventListener("mouseover", (event) => {
    event.preventDefault()
    event.target.animate(togglerJumpingIn, togglerTiming)
})

navbarToggler.addEventListener("mouseout", (event) => {
    event.preventDefault()
    event.target.animate(togglerJumpingOut, togglerTiming)
})

navbarProfile.forEach((icon) => {
    icon.addEventListener("mouseover", (event) => {
        event.preventDefault()
        icon.classList.toggle('fa-solid')
        icon.classList.toggle('fa-regular')
    })

    icon.addEventListener("mouseout", (event) => {
        event.preventDefault()
        icon.classList.toggle('fa-solid')
        icon.classList.toggle('fa-regular')
    })
})

navbarToggler.addEventListener("click", (event) => {
    event.preventDefault()
    navbarDropdown.classList.toggle('navbar-dropdown--slidein')
})

document.addEventListener("click", (event) => {
    event.preventDefault()
    if(
        event.target !== navbarToggler &&
        navbarDropdown.classList.contains('navbar-dropdown--slidein') &&
        !event.target.parentNode.classList.contains('navbar-dropdown--item')
    ) {
        if(!event.target.parentNode.classList.contains('navbar-dropdown--slidein')) {
            navbarDropdown.classList.toggle('navbar-dropdown--slidein')
        }
    }
})

window.addEventListener("resize", () => {
    if(!window.matchMedia("(max-width: 992px)").matches) {
      navbarDropdown.classList.remove('navbar-dropdown--slidein')
    }
})