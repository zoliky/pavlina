"use strict";

const sectionOne = document.querySelector(".section-one");
const sections = document.querySelectorAll("section");

const options = {
  root: null, // defaults to the viewport
  threshold: 0.25, // 0 = fire as soon as any little piece enters
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
    // Some pages need this, some don't
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
