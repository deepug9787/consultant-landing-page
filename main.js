"use strict"

/* Site menu */
const hamburgerMenuBtn = document.querySelector(".hamburger-menu-btn")
const closeMenuBtn = document.querySelector(".close-menu-btn")
const siteHeaderNav = document.querySelector(".site-header__nav")
const menuOverlay = document.querySelector(".menu-overlay")

function showMenu() {
    siteHeaderNav.classList.add("show")
    menuOverlay.classList.add("show")
}

function hideMenu() {
    siteHeaderNav.classList.remove("show")
    menuOverlay.classList.remove("show")
}

hamburgerMenuBtn.addEventListener("click", () => showMenu())
closeMenuBtn.addEventListener("click", () => hideMenu())
menuOverlay.addEventListener("click", () => hideMenu())
/* Site menu end */

/* Accordion */
const accordionHeaderElAll = document.querySelectorAll(".accordion__header")
const toggleIconElAll = document.querySelectorAll(".accordion__toggle-icon")
const openToggleIconSrc = "img/up-arrow.png"
const closeToggleIconSrc = "img/down-arrow.png"

function toggleAccordion() {
    const accordionContentEl = document.getElementById(this.getAttribute("aria-controls"))
    const isAccordionOpen = this.getAttribute("aria-expanded") === "true"

    let accordionContentHeight = 0
    let ariaExpanded = "false"
    let toggleIconSrc = closeToggleIconSrc

    if (!isAccordionOpen) {
        // open accordion
        accordionContentHeight = `${accordionContentEl.scrollHeight}px`
        ariaExpanded = "true"
        toggleIconSrc = openToggleIconSrc
    }

    accordionContentEl.style.height = accordionContentHeight
    this.setAttribute("aria-expanded", ariaExpanded)
    this.querySelector(".accordion__toggle-icon").setAttribute("src", toggleIconSrc)
}

for (const accordionHeaderEl of accordionHeaderElAll) {
    accordionHeaderEl.addEventListener("click", toggleAccordion)
}

for (const toggleIconEl of toggleIconElAll) {
    toggleIconEl.setAttribute("src", closeToggleIconSrc)
}
/* Accordion end */

/* Contact form */
const formAll = document.querySelectorAll("form")

for (const form of formAll) {
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        alert(
            "Sorry, the action you've performed cannot be completed because this landing page has been built for demo purposes."
        )
    })
}
