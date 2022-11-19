let menuBtn = document.querySelector('.menu-btn');

let menu = document.querySelector('.popup');
let head = document.querySelector('.header')
let end = document.querySelector('.popup,active')
menuBtn.addEventListener('click',() =>{
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    head.classList.toggle('active');
} )


let remm = document.querySelectorAll('.link');

remm.forEach(n => n.addEventListener('click',closemenu));

function closemenu() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}

if (end ); 
