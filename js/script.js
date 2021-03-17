//Choose a random color
'use strict';

const button = document.querySelector(".btn");
const body = document.querySelector("body");
const colors = ["red", "black", "white", "blue", "violet"];

body.style.backgroundColor = "yellow";

function handleClick(){
    const colorNumber = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorNumber];
}

function init() {
    button.addEventListener("click", handleClick);
}

init();