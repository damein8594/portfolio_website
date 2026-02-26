// ── Active nav link on scroll ───────────────────────
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll("nav a");

new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.4 },
).observe &&
  sections.forEach((s) => {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === "#" + entry.target.id)
                link.classList.add("active");
            });
          }
        });
      },
      { threshold: 0.4 },
    ).observe(s);
  });
