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

// form validation
const form=document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    const email=document.querySelector('#email').value;
    const errorMsg=document.querySelector('.error-message');
if (email!== email.toLowerCase()) {
e.preventDefault();
errorMsg.style.display='flex';
}

   
});

// popup window

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

let div=document.querySelector('.grid-container')
for(let obj of projects){
    let tech=obj.teachnologies;
    div+=`<div class="grid-item">
    <div class="item-image">
        <img src="${obj.featuredImage}" alt="featured-image">
    </div>
    <div class="item-description">
        <div class="item-title">
            <h2>
            ${obj.name}
            </h2>
        </div>
       <ul class="technologies">
          <li> <a href="#">${tech[0]}</a></li>
          <li> <a href="#">${tech[1]}</a></li>
          <li> <a href="#">${tech[2]}</a></li>
          <li> <a href="#">${tech[3]}</a></li>
      </ul>
   </div>
   <div class="green-btn">
        <a href="" class="viewProject">See Project</a>
    </div>
    </div>`;
}

document.querySelector('.projects').innerHTML=div;

const projectDetailsModal=document.querySelector('.project-details');

document.querySelectorAll('.viewProject').forEach((button)=>{
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        projectDetailsModal.style.display='flex';
    });

});