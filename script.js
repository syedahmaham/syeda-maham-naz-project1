// variable for nav
const nav = document.getElementsByClassName('index header-nav');
// variable for togglemenu
const togMenu = document.getElementsByClassName('fa fa-bars');

togMenu.addEventListener('click', ()=> {
  nav.classList.toggle('active');

});