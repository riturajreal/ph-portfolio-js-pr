'use strict'

// add event on multiple event
const addEventOnElements = function (elements, eventType, callback) {
    for( let i =0; i< elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};

// PRELOADING
const loadingElement = document.querySelector("[data-loading");

window.addEventListener("load", function() {
    loadingElement.classList.add("loaded");
    this.document.body.classList.remove("active");
});

// MOBILE NAV TOGGLER

const [ navTogglers, navLinks, navbar, overlay] = [
    document.querySelectorAll("[data-nav-toggler]"), // toggle icon
    document.querySelectorAll("[data-nav-link"),
    document.querySelector("[data-navbar"), // navbar 
    document.querySelector("[data-overlay"),
];

const toggleNav = function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}


addEventOnElements(navTogglers, "click", toggleNav);