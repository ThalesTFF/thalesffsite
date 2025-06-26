/*Menu scripts*/

let mnMobile = document.querySelector('.mn-mobile');
let nav = document.querySelector('nav');

mnMobile.addEventListener('click', togglemenu);

//Functions Menu

function togglemenu(){
    nav.classList.toggle('header-nav-move');
    mnMobile.classList.toggle('mn-mobile-active');
};