// Mobile
const btnHamburger = document.querySelector('#btnHamburger');
const overlayAnim = document.querySelector('#overlay');
const overlayAnim2 = document.querySelector('#overlay2');
const fadeElems = document.querySelectorAll('.has-fade');
const fadeElems2 = document.querySelectorAll('.has-fade2');
const featuresSelector = document.querySelector('.features-mobile-header');  
const featuresSubmenu = document.querySelector('.features-submenu'); 

const companySelector = document.querySelector('.company-mobile-header');
const companySubmenu = document.querySelector('.company-submenu');

// Desktop
const featuresSubmenuDesktop = document.querySelector('.features-submenu-desktop');
const desktopFeatures = document.querySelector('.header-features');
const companySubmenuDesktop = document.querySelector('.company-submenu-desktop');
const desktopCompany = document.querySelector('.company-link');


btnHamburger.addEventListener('click', function() {
    if(btnHamburger.classList.contains('header-open')) {    // close Hamburger menu 
        btnHamburger.classList.remove('header-open');
        featuresSubmenu.classList.toggle('hidden');
        featuresSubmenu.classList.remove('show');

        companySubmenu.classList.toggle('hidden');
        companySubmenu.classList.remove('show');

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

// Reveals the submenu for Features Mobile

featuresSelector.addEventListener('click', function() {
    if (!featuresSubmenu.classList.contains('show')) {
        featuresSubmenu.classList.remove('hidden');

        featuresSubmenu.classList.toggle('show');
    }
    else {
        featuresSubmenu.classList.toggle('hidden');
        featuresSubmenu.classList.remove('show');

    }
});

// Reveals the submenu for Company Mobile

companySelector.addEventListener('click', function() {
    if (!companySubmenu.classList.contains('show')) {
        companySubmenu.classList.remove('hidden');

        companySubmenu.classList.toggle('show');
    }
    else {
        companySubmenu.classList.toggle('hidden');
        companySubmenu.classList.remove('show');

    }
})

// Reveals the submenu for Features Desktop

desktopFeatures.addEventListener('click', function() {
    if (!featuresSubmenuDesktop.classList.contains('show')) {
      featuresSubmenuDesktop.classList.remove('hidden');
      featuresSubmenuDesktop.classList.toggle('show');
      
    } else {
      featuresSubmenuDesktop.classList.toggle('hidden');
      featuresSubmenuDesktop.classList.remove('show');
    }
});
  
// Reveals the submenu for Company Desktop

desktopCompany.addEventListener('click', function() {
    if (!companySubmenuDesktop.classList.contains('show')) {
      companySubmenuDesktop.classList.remove('hidden');
      companySubmenuDesktop.classList.toggle('show');
    }
    else {
      companySubmenuDesktop.classList.toggle('hidden');
      companySubmenuDesktop.classList.remove('show');
    }
});

// Adds pulsating effect to submenu options of Feature Menu

const featureSubItems = document.querySelectorAll('.feature-subItem');

featureSubItems.forEach(featureSubItem => {
    featureSubItem.addEventListener('mouseover', function() {
        this.previousElementSibling.classList.add('pulsate');
    });

    featureSubItem.addEventListener('mouseout', function() {
        this.previousElementSibling.classList.remove('pulsate');
    });
});


