// Burger menu

burgerButton = document.querySelector('.burger-menu-mob-only');
burgerCloseButton = document.querySelector('.burger-menu-close');
headerLinks = document.querySelector('.header-links');
header = document.querySelector('header');
nav = document.querySelector('nav');
main = document.querySelector('main');

// hide close button
burgerCloseButton.style.display = 'none';

burgerButton.addEventListener('click', function() {
    header.classList.add('header-display');
    headerLinks.style.display = 'block';
    headerLinks.style.color = 'white !important';
    nav.style.marginTop = '141px';
    main.style.display = 'none';
    burgerButton.classList.add('hide-element');
    burgerCloseButton.style.display = 'block';
});


burgerCloseButton.addEventListener('click', function() {
    header.classList.remove('header-display');
    main.style.display = 'block';
    burgerCloseButton.style.display = 'none';
    burgerButton.classList.remove('hide-element');
    nav.style.marginTop = '0px';
    headerLinks.style.display = 'none';
});