(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setupNavigation() {
    const toggle = document.querySelector("#menuToggle");
    const nav = document.querySelector("#nav");
    const topbar = document.querySelector("#topbar");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("is-open", !expanded);
      });
    }
    if (topbar) {
      const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  function setupReveal() {
    const items = document.querySelectorAll(".section, .work-card, .capability-card, .timeline-item");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }

  function setupExternalLinks() {
    document.querySelectorAll("a[href]").forEach((link) => window.SafeDOM.secureLink(link));
  }

  function setupYear() {
    document.querySelectorAll(".current-year").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupExternalLinks();
    setupYear();
    setupReveal();
  });
})();
