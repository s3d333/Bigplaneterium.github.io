// scroll.js — fades in .reveal elements on scroll, and solidifies the nav bar

// Adds .visible to each .reveal element when it enters the viewport
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target); // stop watching once it's revealed
    }
  });
}, { threshold: 0.12 }); // fires when 12% of the element is visible

document.querySelectorAll(".reveal").forEach(function (el) {
  revealObserver.observe(el);
});

// Adds .scrolled to the nav after the user scrolls 50 px down
var nav = document.getElementById("mainNav");

window.addEventListener("scroll", function () {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});
