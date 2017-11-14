/* import files */
require.context('./img', true)
require.context('./fonts', true)

/* import html 
import '../index.html'*/

/* import styles */
import './sass/main.sass'

/* import scripts */
import './js/main.js'



if (window.matchMedia("(max-width: 960px)").matches) {
    let reception = document.querySelector('.header__reception');
    let parentHeaderRight = document.querySelector('.js-header-right');
    let contrast = document.querySelector('.js-contrast-header');
    
    parentHeaderRight.insertBefore(reception,contrast);

}
