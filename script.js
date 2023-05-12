// Mobile
const btnHamburger = document.querySelector('#btnHamburger');
const overlayAnim = document.querySelector('#overlay');
const overlayAnim2 = document.querySelector('#overlay2');
const fadeElems = document.querySelectorAll('.has-fade');
const fadeElems2 = document.querySelectorAll('.has-fade2');
const projectsMobile = document.querySelector('.projects-submenu-header');
const projectsSubmenu = document.querySelector('.projects-submenu');
const contactMobile = document.querySelector('.contact-submenu-header');
const contactSubmenu = document.querySelector('.contact-submenu');

btnHamburger.addEventListener('click', function() {
    if (btnHamburger.classList.contains('header-open')) {    // close Hamburger menu 
        btnHamburger.classList.remove('header-open');
        contactSubmenu.classList.toggle('show');
        if (projectsSubmenu.classList.contains('show')) {
            projectsSubmenu.classList.toggle('show');
        }
        if (contactSubmenu.classList.contains('show')) {
            contactSubmenu.classList.toggle('show');
        }
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        fadeElems2.forEach(function(element){
            element.classList.remove('fade-in2');
            element.classList.add('fade-out2');
        });
    }
    else {                                                // open Hamburger menu
        btnHamburger.classList.add('header-open');
        overlayAnim.classList.add('overlay');
        overlayAnim2.classList.add('overlay-2');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        fadeElems2.forEach(function(element){
            element.classList.remove('fade-out2');
            element.classList.add('fade-in2');
        });
    }
});

// Add sliding effect to hamburger menu components when the menu is opened

btnHamburger.addEventListener("click", function() {
    overlayAnim.classList.toggle("open");
    overlayAnim2.classList.toggle("open");
});

// Reveals the submenu for Projects Mobile

projectsMobile.addEventListener('click', function() {
    if(!projectsSubmenu.classList.contains('show')) {
        projectsSubmenu.classList.toggle('show');
    }
    else {
        projectsSubmenu.classList.toggle('show');
    }
});

// Reveals the submenu for Company Mobile

contactMobile.addEventListener('click', function() {
    if(!contactSubmenu.classList.contains('show')) {
        contactSubmenu.classList.toggle('show');
    }
    else {
        contactSubmenu.classList.toggle('show');
    }
});

// Adds scrolling behavior for each section accessed by nav link. Desktop

const navLinks = document.querySelectorAll('.header-link');

navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
    event.preventDefault();
    const target = this.getAttribute('href');
    const section = document.querySelector(target);
    const sectionTop = section.offsetTop;
    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
}




