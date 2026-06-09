const typedElement = document.getElementById("typed");
const phrases = [
  "Full-Stack Developer",
  "Open Source Enthusiast",
  "Tech Blogger",
  "Problem Solver"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typedElement.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    typedElement.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }

  if (!isDeleting && charIndex === current.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);

  const cards = document.querySelectorAll(
    ".skill-card, .project-card, .blog-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.5s ease-out ${i * 0.05}s`;
    observer.observe(card);
  });
});
