const text = "Very much under construction.";
const typingDelay = 50; // Delay in milliseconds between each character
const typingText = document.getElementById("typing-text");
const menuButton = document.querySelector('.menu-button');

let i = 0;
function typeNextCharacter() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeNextCharacter, typingDelay);
    }
}
typeNextCharacter();

function toggleMenu() {
    menuButton.classList.toggle('open');
}