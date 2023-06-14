const menuButton = document.querySelector(".hamburger");
const navContainer = document.querySelector(".container");

function toggleMenu() {
    menuButton.classList.toggle("open");
    if(navContainer.style.display === "flex") {
        navContainer.style.display = "none";
    }
    else {
        navContainer.style.display = "flex";
    }
}