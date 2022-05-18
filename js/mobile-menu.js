const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const menuLink = document.querySelector('.menu-link');
const logo = document.querySelector('.logo');

    hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    menu.classList.toggle('active');
    logo.classList.toggle('active');
    });

    menuLink.forEach((link)=>{
    link.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
    overlay.classList.remove('active');

});
});

