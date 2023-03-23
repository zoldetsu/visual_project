let menuBtn = document.querySelector('.menu-btn');
let navig = document.querySelector('.navig');
let profile = document.querySelector('.profile');




menuBtn.addEventListener('click',() => {
    menuBtn.classList.toggle('active');
    navig.classList.toggle('active');
    profile.classList.toggle('active');
 
})