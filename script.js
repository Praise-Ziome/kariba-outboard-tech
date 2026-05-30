// ==========================================
// KARIBA OUTBOARD TECH
// script.js
// ==========================================

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger?.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
});

// CLOSE MOBILE MENU ON LINK CLICK
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("active");
  });
});

// NAVBAR SCROLL EFFECT
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ==========================================
// REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        const delay =
          entry.target.dataset.delay || 0;

        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// ==========================================
// ACTIVE NAVIGATION LINKS
// ==========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(
  ".nav-links a, .mobile-menu a"
);

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
        sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {
      link.classList.add("active");
    }
  });
});

// ==========================================
// HERO PARALLAX
// ==========================================

const heroSun = document.querySelector(".hero-sun");
const wave1 = document.querySelector(".wave-1");
const wave2 = document.querySelector(".wave-2");
const wave3 = document.querySelector(".wave-3");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY < window.innerHeight) {

    if (heroSun) {
      heroSun.style.transform =
        `translateY(${scrollY * 0.15}px)`;
    }

    if (wave1) {
      wave1.style.transform =
        `translateY(${scrollY * 0.08}px)`;
    }

    if (wave2) {
      wave2.style.transform =
        `translateY(${scrollY * 0.05}px)`;
    }

    if (wave3) {
      wave3.style.transform =
        `translateY(${scrollY * 0.03}px)`;
    }
  }
});

// ==========================================
// HERO SCROLL INDICATOR
// ==========================================

const heroScroll =
  document.querySelector(".hero-scroll");

heroScroll?.addEventListener("click", () => {
  const services =
    document.getElementById("services");

  services?.scrollIntoView({
    behavior: "smooth"
  });
});

// ==========================================
// PAGE LOAD ANIMATION
// ==========================================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});