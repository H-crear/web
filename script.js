const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(nav.classList.contains("open")));
    });
  }

  const links = document.querySelectorAll(".nav a");
  const current = location.pathname.split("/").pop() || "index.html";
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("is-active");
    }
  });
}

function setupReveals() {
  const revealEls = document.querySelectorAll(".reveal");
  revealEls.forEach((el, index) => {
    el.style.setProperty("--idx", String(index % 6));
  });

  if (reduceMotion) {
    revealEls.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

function setupParallax() {
  if (reduceMotion || window.innerWidth < 900) {
    return;
  }

  const parallaxEls = document.querySelectorAll(".parallax");
  if (!parallaxEls.length) {
    return;
  }

  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 8;

    parallaxEls.forEach((el, idx) => {
      const strength = (idx + 1) * 0.5;
      el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
    });
  });
}

function setCurrentYear() {
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

setupNavigation();
setupReveals();
setupParallax();
setCurrentYear();
