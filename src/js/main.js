/**
 * Include UIkit
 */
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

/**
 * Include React
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './components/menu'


if (window.matchMedia("(max-width: 960px)").matches) {

    // Контроль высоты uk-sticky-placeholder для блока меню
    let sticky = document.querySelector(".uk-sticky-placeholder")
    let menu = document.querySelector(".header-menu__container")

    sticky.style.height = sticky.offsetHeight - menu.offsetHeight - 1 + "px"

    // Переключение панели поиска
    let searchButton = document.querySelector(".search-small")

    searchButton.addEventListener("click", function () {
        searchButton.classList.toggle("search-small-opened")
        document.querySelector(".header__reception").classList.toggle("hide")
        document.querySelector(".contrast-version--header").classList.toggle("hide")
        document.querySelector(".small-menu").classList.toggle("hide")
        document.querySelector(".header__space").classList.toggle("hide")
        document.querySelector(".voice-search").classList.toggle("hide")
        document.querySelector(".header__search").classList.toggle("header__search-opened")
    })

    // Проявление логотипа при прокрутке меню
    window.onscroll = function() {
        window.pageYOffset > 0 ? document.querySelector(".header-logo-small").classList.remove("hide") : document.querySelector(".header-logo-small").classList.add("hide")
    }
   
}   

