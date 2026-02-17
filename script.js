// ── Custom Cursor ──────────────────────────────────
if (window.matchMedia("(hover: none)").matches) {
  document.getElementById("cursor").style.display = "none";
} else {
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

  // Expand cursor on any clickable element
  const clickables = document.querySelectorAll(
    'a, button, .btn, [role="button"]',
  );

  clickables.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("expanded"));
    el.addEventListener("mouseleave", () =>
      cursor.classList.remove("expanded"),
    );
  });
}

// ── Scroll Reveal ──────────────────────────────────
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  },
);

reveals.forEach((el) => observer.observe(el));

// ── Trigger hero reveals immediately ──────────────
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#hero .reveal").forEach((el) => {
    // Small delay to let browser paint first
    setTimeout(() => el.classList.add("visible"), 80);
  });
});

// ── Active nav link on scroll ──────────────────────
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll("nav a");

const navObserver = new IntersectionObserver(
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
);

sections.forEach((s) => navObserver.observe(s));
