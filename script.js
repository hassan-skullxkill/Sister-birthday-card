
const particles = document.getElementById("particles");

function createParticle() {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.innerHTML = "✧";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.fontSize = (10 + Math.random() * 18) + "px";
    particle.style.animationDuration = (7 + Math.random() * 8) + "s";
    particle.style.animationDelay = Math.random() * 3 + "s";

    particles.appendChild(particle);

    setTimeout(() => particle.remove(), 16000);
}

setInterval(createParticle, 500);
