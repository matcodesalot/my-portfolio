document.addEventListener("DOMContentLoaded", () => {
    const check = document.getElementById("check");
    const links = document.querySelectorAll(".menu-links");
    
    for(const link of links) {
        link.addEventListener("click", () => {
            check.checked = false;
        });
    }
});