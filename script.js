"use strict";
const textArea = document.querySelector("#vocabulary-input");

textArea.addEventListener("input", (e) => {
  console.log(e.target.value);
});
