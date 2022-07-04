const datasas = document.childNodes;
console.log(datasas);


const elemetss = document.querySelector('[data-say-hi]');

const textelem = elemetss.innerHTML;
console.log(elemetss);


const ultext = document.querySelector(['li']);
const litext = ultext.outerHTML;
console.log(litext);



const liketext = document.querySelectorAll('.like');
console.log(liketext);


const prokrutka = document.documentElement;
const mainWidth = prokrutka.clientWidth;
const windowWidth = window.innerWidth;
console.log(windowWidth - mainWidth);




function setScrollToOptions(){
    window.scrollTo({
        top:300,
        left:0,
        behavior: "smooth"
    })
};
setTimeout(setScrollToOptions,1000);