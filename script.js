// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

// Intersection observer for scroll reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-reveal, section, .section').forEach(el => observer.observe(el));
});

// Contact FAB toggle
function toggleContactMenu() {
  const menu = document.getElementById('contact-menu');
  if(!menu) return;
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  menu.style.gap = '8px';
}

// Close contact menu if click outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('contact-menu');
  const fab = document.querySelector('.contact-fab');
  if(!menu || !fab) return;
  if(!menu.contains(e.target) && !fab.contains(e.target)) {
    menu.style.display = 'none';
  }
}, true);

// Mobile menu toggle
function toggleMenu() {
  const nav = document.querySelector('.top-nav');
  if(nav) nav.classList.toggle('show');
}

// Contact form submission (for contact.html)
const contactForm = document.getElementById('contact-form');
if(contactForm){
  const thankYou = document.getElementById('thank-you-msg');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    thankYou.style.display = 'block';
    contactForm.reset();
  });
}
