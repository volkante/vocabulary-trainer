"use strict";
// Store DOM elements in variables
const textArea = document.querySelector("#vocabulary-input");
const sendButton = document.querySelector(".send-button");
const outputList = document.querySelector(".output-list");

function randomOrder() {
  // Store turkish words input into a constant named turkishWords
  const turkishWords = textArea.value;
  // Trim the blank space at the beginning and end of input just in case and split it into different strings by new row mark
  const turkishWordsArr = turkishWords.trim().split("\n");

  // Iterate over the turkish words to sort them randomly
  for (let i = 0; i < turkishWordsArr.length; i++) {
    // Create a list element for each word
    const turkishWordElement = document.createElement("li");
    // Take the list element's text content from turkish words arr
    turkishWordElement.textContent = turkishWordsArr[i];
    // Add list element to its parent to display it
    outputList.appendChild(turkishWordElement);
  }
}

sendButton.addEventListener("click", randomOrder);
