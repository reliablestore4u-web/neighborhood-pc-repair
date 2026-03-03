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

// Form submission: show thank-you message and redirect (free Formspree plan workaround)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function() {
    // Show thank-you message
    const msg = document.getElementById("thank-you-msg");
    if (msg) msg.style.display = "block";

    // Redirect to homepage after 3 seconds
    setTimeout(function() {
      window.location.href = "https://www.neighborhoodpcrepair.ca/";
    }, 3000);
  });
}
