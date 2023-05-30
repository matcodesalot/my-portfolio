const text = "I promise this will get better.";
const typingDelay = 50; // Delay in milliseconds between each character
const typingTextEl = document.getElementById("typing-text");

let i = 0;
function typeNextCharacter() {
    if (i < text.length) {
        typingTextEl.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeNextCharacter, typingDelay);
    }
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/mathew-johns/", "_blank");
}

function openGitHub() {
    window.open("https://github.com/matcodesalot", "_blank");
}

typeNextCharacter();