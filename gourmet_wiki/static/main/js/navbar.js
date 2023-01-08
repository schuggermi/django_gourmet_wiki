let navbarToggler = document.querySelector('#navbar-toggler')
let navbarDropdown = document.querySelector('#navbar-dropdown')

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

const togglerRotate = [
    { transform: `rotate(5deg)` },
]

navbarDropdown.style.offsetHeight = 0

navbarToggler.addEventListener("mouseover", (event) => {
    event.preventDefault()
    event.target.animate(togglerJumpingIn, togglerTiming)
})

navbarToggler.addEventListener("mouseout", (event) => {
    event.preventDefault()
    event.target.animate(togglerJumpingOut, togglerTiming)
})

navbarToggler.addEventListener("click", (event) => {
    event.preventDefault()
    navbarDropdown.classList.toggle('navbar-dropdown--slidein')
})

document.addEventListener("click", (event) => {
    if(event.target !== navbarToggler && navbarDropdown.classList.contains('navbar-dropdown--slidein')) {
        navbarDropdown.classList.toggle('navbar-dropdown--slidein')
    }
})