const openMenuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.mobile-menu__close-btn');

const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
}

openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggleMenu('active');
    closeMenuBtn.classList.toggleMenu('active');
    
})

document.querySelectorAll('.mobile-menu__link').forEach(n => n.
    addEventListener('click', () => {
        openMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }))

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
      });