
function toggleDarkMode(){document.body.classList.toggle('dark');}
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:0.1});
window.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.scroll-reveal, section, .section').forEach(el=>observer.observe(el));});
function toggleContactMenu(){const menu=document.getElementById('contactMenu');if(!menu)return;menu.style.display=(menu.style.display==='flex')?'none':'flex';if(menu.style.display===''){menu.style.display='flex';}menu.style.gap='8px';}
document.addEventListener('click',(e)=>{const menu=document.getElementById('contactMenu');const fab=document.querySelector('.contact-fab');if(!menu||!fab)return;if(!menu.contains(e.target)&&!fab.contains(e.target)){menu.style.display='none';}},true);
