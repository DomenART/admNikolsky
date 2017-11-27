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

document.querySelectorAll('.js-mobile-menu').forEach((el) => {
    if (window.innerWidth > 960) return false

    const menu = document.querySelector('.js-menu')
    const parseMenu = (el) => {
        let arr = []

        for (var i = 0; i < el.children.length; i++) {
            let link = el.children[i].querySelector('a')
            let submenu = el.children[i].querySelector('ul')
            let item = {
                href: link.getAttribute('href'),
                title: link.innerText,
                classes: el.children[i].getAttribute('class') || ''
            }

            if (submenu)
                item.children = parseMenu(submenu)

            arr.push(item)
        }

        return arr
    }

    ReactDOM.render(
        <Menu items={parseMenu(menu)} />,
        el
    )
})


if (window.matchMedia("(max-width: 960px)").matches) {

    // Контроль высоты uk-sticky-placeholder для блока меню
    let sticky = document.querySelector(".uk-sticky-placeholder")
    let menu = document.querySelector(".header-menu__container")

    sticky.style.height = sticky.offsetHeight - menu.offsetHeight - 1 + "px"

    // Переключение панели поиска
    let searchButton = document.querySelector(".search-small")
    let reception = document.querySelector(".header__reception")
    let contrast = document.querySelector(".contrast-version--header")
    let menuSmall = document.querySelector(".small-menu")
    let space = document.querySelector(".header__space")
    let voice = document.querySelector(".voice-search")
    let search = document.querySelector(".header__search")
    let logoSmall = document.querySelector(".header-logo-small")

    searchButton.onclick = function() {
        searchButton.classList.toggle("search-small-opened")
        reception.classList.toggle("hide")
        contrast.classList.toggle("hide")
        menuSmall.classList.toggle("hide")
        space.classList.toggle("hide")
        voice.classList.toggle("hide")
        search.classList.toggle("header__search-opened")
        if ((window.pageYOffset > 0) && (!this.classList.contains("search-small-opened"))) {
            logoSmall.classList.remove("hide")
        } else {
            logoSmall.classList.add("hide")
        }
    }

    // Проявление логотипа при прокрутке меню
    window.onscroll = function() {
        if ((window.pageYOffset > 0) && (!searchButton.classList.contains("search-small-opened"))) {
            logoSmall.classList.remove("hide")
        } 
        else {
            logoSmall.classList.add("hide")
        }
    }
   
}   

