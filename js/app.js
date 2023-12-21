const header = document.querySelector("header");
const menubtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener("click",()=>{
    header.classList.toggle("shwo-mobile-menu");
})
