headerContentText = document.querySelector('#header-content--text')

let i = 0;
let text = headerContentText.innerHTML
let speed = 30; /* The speed/duration of the effect in milliseconds */

headerContentText.innerHTML = ""

const typeWriter = () => {
    if (i < text.length) {
        headerContentText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter()
})