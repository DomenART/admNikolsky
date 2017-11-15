/* import files */
require.context('./img', true)
require.context('./fonts', true)

/* import html 
import '../index.html'*/

/* import styles */
import './sass/main.sass'

/* import scripts */
import './js/main.js'



// Контроль высоты uk-sticky-placeholder для блока меню

if (window.matchMedia("(max-width: 960px)").matches) {
    let sticky = document.querySelector(".uk-sticky-placeholder")
    let menu = document.querySelector(".header-menu__container")

    sticky.style.height = sticky.offsetHeight - menu.offsetHeight + "px"
}   