// Copyright 2021 Zoltán Király. All rights reserved.

"use strict";

const faders = document.querySelectorAll(".fade-in");

const options = {
  root: null, // defaults to the viewport
  threshold: 0, // A zero value fires as soon as any little piece enters
  rootMargin: "-100px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add("appear");
    
    // console.log(entry.target);
    // console.log(entry.isIntersecting);

    // Once observed, stop observing
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  observer.observe(fader);
});
