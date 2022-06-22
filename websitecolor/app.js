const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('#mobile-menu');
const menuLinks = $('.navbar__menu');

// Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show Active menu when scrolling
const highlightMenu = () => {
    const element = $('.highlight')
    const homeMenu = $('#home-page')
    const aboutMenu = $('#about-page')
    const servicesMenu = $('#services-page')
    // const signupMenu = $('#signup')
    let scrollPos = window.scrollY

    // adds 'highlight' class to my menu items
    if(window.innerWidth >960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth >960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }// else if(window.innerWidth > 960 && scrollPos > 2700){
    //     signupMenu.classList.add('highlight');
    //     servicesMenu.classList.remove('highlight');
    //     return;
    // }

    if((element && window.innerWidth < 960 && scrollPos < 600) || element){
        element.classList.remove('highlight');
    }

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);