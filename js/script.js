const navbar = document.querySelector('.header');
const logo = document.querySelector('.nav__logo img');

window.onscroll = function(){
    if (window.pageYOffset > 0) {
        navbar.classList.add('nav__scroll');
        logo.src = 'img/logo-scroll.svg';
    }
    else {
        navbar.classList.remove('nav__scroll');
        logo.src = 'img/logo.svg';
    }
}