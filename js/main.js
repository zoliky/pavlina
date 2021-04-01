"use strict";

// Hamburger navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = menuToggle.parentElement.parentElement;
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