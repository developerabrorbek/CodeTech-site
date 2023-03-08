"use strict";

const first = document.querySelector(".video-first");
const second = document.querySelector(".video-second");
const third = document.querySelector(".video-third");
let right = document.querySelector(".right-icon");
let left = document.querySelector(".left-icon");

left.addEventListener("click", (evt) =>{
    let width = first.clientWidth;
    console.log(first.classList);
    first.classList.value += ` -left-[${width}px]`;
    console.log(evt);
})