const navbar = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');
const navMenu = document.querySelector('.nav__menu');
const navToggler = document.querySelector('.nav__toggler');

let stopAnimationsTimer = null;

navToggler.onclick = function(){
    navToggler.setAttribute('aria-expanded',getAriaExpanded());
    navMenu.classList.toggle('nav__toggle');
}

function getAriaExpanded(){
    return getContraryAriaExpanded(document.querySelector('.nav__toggler').getAttribute("aria-expanded"));
}

function getContraryAriaExpanded(ariaExpanded){
    if(ariaExpanded === 'true'){
        ariaExpanded = 'false';
    }else{
        ariaExpanded = 'true';
    }

    return ariaExpanded;
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