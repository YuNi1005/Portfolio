const lines = [
    "> boot --portfolio Yuzuki.dev",
    "> initializing modules...",
    "> loading projects...",
    "> ready."
];

let currentLine = 0;
let charIndex = 0;
const output = document.getElementById("output")
const cursor = document.getElementById("cursor")

function typeCharacter() {
    const line = lines[currentLine];

    if (charIndex < line.length) {
        output.innerHTML += line[charIndex];
        charIndex++;
        setTimeout(typeCharacter, 40);
    }else {
        output.textContent += "\n";
        currentLine++;
        charIndex = 0;

        if (currentLine < lines.length) {
            setTimeout(typeCharacter, 300);
        }else {
            setTimeout(() => {
                document.getElementById("boot-screen").style.display = "none";
                document.getElementById("portfolio").style.display = "block";
            }, 1000);
        }
    }
}

function startBoot() {
    cursor.style.display = "none";
    typeCharacter();
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(startBoot, 2000);
})