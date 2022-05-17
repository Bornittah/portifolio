const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', ()=>{
hamburger.classList.toggle('active');
overlay.classList.toggle('active');
menu.classList.toggle('active');
logo.classList.toggle('active');
});

document.querySelector('.menu')
.forEach(n=>n.addEventListener('click', ()=>{
hamburger.classList.remove('active');
menu.classList.remove('active');
logo.classList.remove('active');
// logo.style.display="none";
// logo.style.display="none";
}));

