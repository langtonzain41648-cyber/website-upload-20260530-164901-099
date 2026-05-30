const navToggle = document.querySelector('[data-nav-toggle]');
const mobileLinks = document.querySelector('[data-mobile-links]');

if (navToggle && mobileLinks) {
  navToggle.addEventListener('click', () => {
    mobileLinks.classList.toggle('is-open');
  });
}

const slides = Array.from(document.querySelectorAll('[data-hero-slide]'));
const dots = Array.from(document.querySelectorAll('[data-hero-dot]'));
let heroIndex = 0;

function setHeroSlide(index) {
  if (!slides.length) {
    return;
  }

  heroIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === heroIndex);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === heroIndex);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => setHeroSlide(index));
});

if (slides.length > 1) {
  setInterval(() => setHeroSlide(heroIndex + 1), 5200);
}
