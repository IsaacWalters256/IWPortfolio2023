const mainImageHeaders = document.querySelector('.main-image-headers');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

// https://cdnjs.com/libraries/gsap
// https://www.w3schools.com/css/css3_images.asp

//<img class="hamburger" src="./img/hamburger.png" alt="hamburger" width="10" height="30">

const tl = gsap.timeline();

tl.fromTo(mainImageHeaders, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(mainImageHeaders, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, {x: "-100%"}, {x: "0%"})
.fromTo(hamburger, 0.5, {x: "-300%"}, {x: "0%"})
.fromTo(headline, 0.5, {x: "-300%"}, {x: "0%"});