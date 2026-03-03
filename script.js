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
