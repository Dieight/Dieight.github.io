const typed = document.getElementById("typed");
const phrases = [
  "Full-Stack Developer",
  "Open Source Enthusiast",
  "Tech Blogger",
  "Problem Solver"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typed.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typed.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 600);
});
