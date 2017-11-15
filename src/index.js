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
   //     if (searchButton.classList.contains("search-small-opened")) {
            document.querySelector(".header__reception").classList.toggle("hide")
            document.querySelector(".contrast-version--header").classList.toggle("hide")
            document.querySelector(".small-menu").classList.toggle("hide")
            document.querySelector(".header-logo-small").classList.toggle("hide")
            document.querySelector(".header__space").classList.toggle("hide")
            document.querySelector(".voice-search").classList.toggle("hide")
            document.querySelector(".header__search").classList.toggle("header__search-opened")
     //   } else {
            
        
    })

}   