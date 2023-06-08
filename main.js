const menuButton = document.querySelector(".hamburger");
const navigation = document.getElementById("navigation");
const socialLinks = document.querySelectorAll(".sci li a");

function toggleMenu() {
    menuButton.classList.toggle("open");
    if(navigation.style.display === "grid") {
        navigation.style.display = "none";
        socialLinks[0].style.display = "grid";
        socialLinks[1].style.display = "grid";
    }
    else {
        navigation.style.display = "grid";
        socialLinks[0].style.display = "none";
        socialLinks[1].style.display = "none";
    }
}