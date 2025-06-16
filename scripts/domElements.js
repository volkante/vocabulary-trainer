"use strict";
// Store DOM elements in variables

// input - output
const textArea = document.querySelector("#vocabulary-input");
const outputList = document.querySelector(".output-list");
// Buttons
const shuffleBtn = document.querySelector(".btn--shuffle-input");
const showRandomWordBtn = document.querySelector(".btn--show-random-word");
const removeBtn = document.querySelector(".btn--remove-output");
const nextBtn = document.querySelector(".btn--next");

export {
  textArea,
  outputList,
  shuffleBtn,
  showRandomWordBtn,
  removeBtn,
  nextBtn,
};
