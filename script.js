const pikachu = document.querySelector('.pikachu');

function startWalking() {
    pikachu.style.animation = "walk 5s linear infinite";
}

// Start the animation when the page loads
window.onload = startWalking;
