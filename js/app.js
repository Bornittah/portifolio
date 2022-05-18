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

    document.querySelectorAll('.menu').forEach((link)=>{
    link.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
    overlay.classList.remove('active');

});
});


let projects=[
    {
        name:"Keeping track of hundreds of components",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage:"./assets/images/Img-Plaholder.svg",
        teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
        versionURL:"https://github.com/Bornittah/portifolio",
        sourceURL:"https://github.com/Bornittah/portifolio",

    },
    {
        name:"Keeping track of hundreds of components",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage:"../assets/images/Img-Plaholder.svg",
        teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
        versionURL:"https://github.com/Bornittah/portifolio",
        sourceURL:"https://github.com/Bornittah/portifolio",

    },
    {
        name:"Keeping track of hundreds of components",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage:"../assets/images/Img-Plaholder.svg",
        teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
        versionURL:"https://github.com/Bornittah/portifolio",
        sourceURL:"https://github.com/Bornittah/portifolio",

    },
    {
        name:"Keeping track of hundreds of components",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage:"../assets/images/Img-Plaholder.svg",
        teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
        versionURL:"https://github.com/Bornittah/portifolio",
        sourceURL:"https://github.com/Bornittah/portifolio",

    }
];

