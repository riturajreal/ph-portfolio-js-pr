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