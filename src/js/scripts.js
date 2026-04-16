const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.style.padding = window.scrollY > 60
    ? '1rem 5vw'
    : '1.5rem 5vw';
});