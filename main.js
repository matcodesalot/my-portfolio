const menuButton = document.querySelector(".hamburger");
const navigation = document.getElementById("navigation");

function toggleMenu() {
    menuButton.classList.toggle("open");
    if(navigation.style.display === "grid") {
        navigation.style.display = "none";
    }
    else {
        navigation.style.display = "grid";
    }
}