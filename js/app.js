const header = document.querySelector("header");
const menubtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// toggle mobile menu on menu button click
menubtn.addEventListener("click",()=>{
    header.classList.toggle("shwo-mobile-menu");
});

// close mobile menu on close button click
closeMenuBtn.addEventListener("click",()=>{
    menubtn.click();
});