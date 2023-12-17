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

// --------------------------------------------------------

// MOBILE NAV TOGGLER

const [ navTogglers, navLinks, navbar, overlay] = [
    document.querySelectorAll("[data-nav-toggler]"), // toggle icon
    document.querySelectorAll("[data-nav-link"),
    document.querySelector("[data-navbar"), // navbar 
    document.querySelector("[data-overlay"),
];

// open side nav function
const toggleNav = function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}

// event listener to open NAV
addEventOnElements(navTogglers, "click", toggleNav);


// when we click on navItem then close NAV
const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
}

// close NAV Listener
addEventOnElements(navLinks, "click", closeNav);

// --------------------------------------------------------------

// HEADER

const header = document.querySelector("[data-header");

const activeElementOnScroll = function () {
    if(window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
};

window.addEventListener("scroll", activeElementOnScroll);

// TEXT ANIMATION EFFECT FOR HERO SECTION

// hero wrapper texts
const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function() {
    // loop through all letter box
    for(let i = 0; i < letterBoxes.length; i++) {
        // set initial animation delay
        let letterAnimationDelay = 0;

        // get all characters from the current letter box
        const letters = letterBoxes[i].textContent.trim(); // single word -- > eg. Portraits

        // remove all characters from  the current letter box
        letterBoxes[i].textContent = "";

        // lop through all letters 
        for(let j = 0; j < letters.length; j++ ) {
            
            // create a SPAN
            const span =  document.createElement("span");

            // sey animation delay on span
            span.style.animationDelay = `${letterAnimationDelay}s`;

            // set the "in" class on the span, if current letterbox is active
            // otherwise class is "out"

            if ( i === activeLetterBoxIndex) {
                span.classList.add("in");
            } else {
                span.classList.add("out");
            }

            // pass current into span
            span.textContent = letters[j];

            // add space class on span, when current letter contains space
            if(letters[j] === " ") span.classList.add("space");

            // pass the span on current letter box
            letterBoxes[i].appendChild(span);

            // skip letterAnimationDelay when loop is in the last index
            if ( j >= letters.length -1) break;

            // otherwise update
            letterAnimationDelay += 0.05;


        }

        // get total delay of active letter box
        if( i === activeLetterBoxIndex) {
            totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
        }

        // add active class on last active letter box
        if( i === lastActiveLetterBoxIndex){
            letterBoxes[i].classList.add("active");
        }else{
            letterBoxes[i].classList.remove("active");
        }
    }

    setTimeout(function () {
        lastActiveLetterBoxIndex = activeLetterBoxIndex;

        // update activeLetterBoxIndex based on total letter boxes
        activeLetterBoxIndex >= letterBoxes.length -1 ? activeLetterBoxIndex = 0 : 
        activeLetterBoxIndex++;

        setLetterEffect();

    }, (totalLetterBoxDelay * 1000) + 3000 );
}

// call the letter effect function after window get loaded
window.addEventListener("load", setLetterEffect);
