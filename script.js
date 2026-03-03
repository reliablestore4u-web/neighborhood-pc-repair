// Mobile Menu
function toggleMenu() {
  const nav = document.querySelector('.top-nav');
  if (nav) nav.classList.toggle('show');
}

// Contact FAB
function toggleContactMenu() {
  const menu = document.getElementById('contact-menu');
  if (!menu) return;
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Close FAB if clicking outside
document.addEventListener("click", function(e) {
  const menu = document.getElementById("contact-menu");
  const fab = document.querySelector(".contact-fab");
  if (!menu || !fab) return;
  if (!menu.contains(e.target) && !fab.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Scroll reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-reveal, section, .section, .card').forEach(el => observer.observe(el));
});

// Formspree AJAX Submission with Thank You
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { "Accept": "application/json" }
      });
      if (response.ok) {
        document.getElementById("thank-you-msg").style.display = "block";
        form.reset();
        setTimeout(() => { window.location.href = "index.html"; }, 3000); // Redirect to home after 3s
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  });
});
