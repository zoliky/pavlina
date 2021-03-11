"use strict";

// Hamburger navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = menuToggle.parentElement;
const menuDropdown = document.querySelector(".menu-dropdown");

menuToggle.addEventListener("click", event => {
  event.preventDefault();
  nav.classList.toggle("is-open");
});