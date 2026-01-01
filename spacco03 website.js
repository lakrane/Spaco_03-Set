// Particles.js Animation
particlesJS("particles", {
  particles: {
    number: { value: 80 },
    color: { value: "#00d4ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#7b42ff", opacity: 0.3, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } }
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Light/Dark Mode Toggle
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('light');
});