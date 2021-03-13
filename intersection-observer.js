// Copyright 2021 Zoltán Király. All rights reserved.

"use strict";

const sectionOne = document.querySelector(".section-one");
const sections = document.querySelectorAll("section");

const options = {
  root: null, // defaults to the viewport
  threshold: 0.25, // A zero value fires as soon as any little piece enters
  rootMargin: "-150px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    
    console.log(entry.target);
    console.log(entry.isIntersecting);

    // Once observed, stop observing
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});