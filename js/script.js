const navbar = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');
const navMenu = document.querySelector('.nav__menu');
const navToggler = document.querySelector('.nav__toggler');

let navbarMenuState = false;
let stopAnimationsTimer = null;

navToggler.onclick = function(){
    navMenu.classList.toggle('nav__toggle');

    if(navbarMenuState){
        navbarMenuState = false;
        navToggler.src = 'img/icon-hamburger.svg';
    }
    else{
        navbarMenuState = true;
        navToggler.src = 'img/icon-close.svg';
    }
}

logo.onclick = function(){
    window.location.href = 'index.html';
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