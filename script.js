const btn = document.querySelector(".label")
const body = document.querySelector("body")
const circo = document.querySelector(".circo")

btn.onclick = function() {
    btn.classList.toggle('active')
    body.classList.toggle('active')
    circo.classList.toggle('active')
}