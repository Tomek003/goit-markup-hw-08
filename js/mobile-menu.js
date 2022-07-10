const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  mobileMenu.classList.toggle('mobile-menu--active');
  mobileMenuCloseBtn.classList.toggle('mobile-menu__close-btn--active');
};


hamburger.addEventListener('click', handleClick);
mobileMenuCloseBtn.addEventListener('click', handleClick);