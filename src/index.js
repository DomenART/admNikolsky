/* import files */
require.context('./img', true)
require.context('./fonts', true)

/* import html 
import '../index.html'*/

/* import styles */
import './sass/main.sass'

/* import scripts */
import './js/main.js'

//import '../index.html'




if (window.matchMedia("(max-width: 960px)").matches) {

    // Контроль высоты uk-sticky-placeholder для блока меню
    let sticky = document.querySelector(".uk-sticky-placeholder")
    let menu = document.querySelector(".header-menu__container")

    sticky.style.height = sticky.offsetHeight - menu.offsetHeight - 1 + "px"

    //Переключение панели поиска
    let searchButton = document.querySelector(".search-small")

    searchButton.addEventListener("click", function() {
        searchButton.classList.toggle("search-small-opened")
        document.querySelector(".header__reception").style.display = "none"
        document.querySelector(".contrast-version--header").style.display = "none"
        document.querySelector(".small-menu").style.display = "none"
        document.querySelector(".header-logo-small").style.display = "none"
        document.querySelector(".header__space").style.display = "none"
        document.querySelector(".header__search").style.display = "block"
        document.querySelector(".header__search").toggle("header__search-opened")
    })


}   