// ── Detect hover device & enable custom cursor ──────
if (!window.matchMedia("(hover: none)").matches) {
  document.body.classList.add("has-hover");

  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
  });

  document
    .querySelectorAll('a, button, .btn, .btn-ghost, [role="button"]')
    .forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("expanded"));
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("expanded"),
      );
    });
}

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
