"use strict";

let indexOfDisplayedWord = 0;

export function moveNext(arr, element) {
  element.replaceChildren();
  const wordElement = document.createElement("li");
  const content = arr[indexOfDisplayedWord];
  // If revealed info is a link, make it anchor element
  if (content.startsWith("https")) {
    createLink(content, wordElement);
  } else {
    wordElement.textContent = content;
  }
  element.appendChild(wordElement);
  indexOfDisplayedWord++;
}

function createLink(content, wordElement) {
  const link = document.createElement("a");
  link.href = content;
  link.textContent = content;
  link.target = "_blank";
  wordElement.appendChild(link);
}
