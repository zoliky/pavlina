"use strict";

// Hamburger navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = menuToggle.parentElement;
const menuDropdown = document.querySelector(".menu-dropdown");

menuToggle.addEventListener("click", event => {
  event.preventDefault();
  nav.classList.toggle("is-open");

  const height = menuDropdown.scrollHeight;

  if (nav.classList.contains("is-open")) {
    menuDropdown.style.setProperty("height", height + "px");
  } else {
    menuDropdown.style.setProperty("height", "0");
  }
});

// Hide and show header
// const header = document.querySelector(".header");
// let lastScrollTop = 0;

// window.addEventListener("scroll", event => {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop) {
//     if (!nav.classList.contains("is-open")) {
//       header.style.top = "-150px";
//     }
//   } else {
//     header.style.top = "0";
//   }

//   lastScrollTop = scrollTop;
// });