const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.padding = window.scrollY > 60 ? '1rem 5vw' : '1.5rem 5vw';
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navDrawer = document.getElementById('navDrawer');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
  menuToggle.classList.add('open');
  navDrawer.classList.add('open');
  navOverlay.style.display = 'block';
  requestAnimationFrame(() => navOverlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuToggle.classList.remove('open');
  navDrawer.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { navOverlay.style.display = 'none'; }, 350);
}

menuToggle.addEventListener('click', () => {
  navDrawer.classList.contains('open') ? closeMenu() : openMenu();
});

navOverlay.addEventListener('click', closeMenu);

navDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});