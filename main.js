let Red = document.getElementById("red")
let Blue = document.getElementById("blue")
let black = document.getElementById("black")
let Green = document.getElementById("green")
let Aqua = document.getElementById("aqua")
let Purple = document.getElementById("purple")

function setColor(color) {
    document.body.style.background = color;
    localStorage.setItem("Color",color)
}

document.body.style.background = localStorage.getItem("Color")