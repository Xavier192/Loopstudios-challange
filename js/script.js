const navbar = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo img');
const navMenu = document.querySelector('.nav__menu');
const navToggler = document.querySelector('.nav__toggler');
const togglerImg = document.querySelector('.nav__toggler img');
let navbarMenuState = false;
let stopAnimationsTimer = null;

navToggler.onclick = function(){
    navMenu.classList.toggle('nav__toggle');

    if(navbarMenuState){
        navbarMenuState = false;
        togglerImg.src = 'img/icon-hamburger.svg';
    }
    else{
        navbarMenuState = true;
        togglerImg.src = 'img/icon-close.svg';
    }
}

window.onresize = function(){
    document.body.id = 'stop-animations';
    stopAnimationsTimer = setTimeout(function(){document.body.id = '';},400);
}

window.onscroll = function(){
    if (window.pageYOffset > 0) {
        navbar.classList.add('nav__scroll');
    }
    else {
        navbar.classList.remove('nav__scroll');
    }
}