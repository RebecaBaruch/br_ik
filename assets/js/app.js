const dropBtn = document.querySelector(".menu-btn");
const dropMenu = document.getElementById("drop-menu");
const closeBtn = document.querySelector(".close-btn");

dropBtn.addEventListener("click", toggleMenu);

closeBtn.addEventListener("click", toggleMenu)

function toggleMenu(){
    dropMenu.classList.toggle("drop-menu-open");
}