import mobileNav from './modules/mobile-nav.js';
mobileNav();


/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  window.scrollY >= 50 ? header.classList.add('blur-header') 
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
