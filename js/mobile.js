const mobileNav = document.querySelector('.mobile-menu');
const burgerIcon = document.querySelector('.hamburger');

burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    
})