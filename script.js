"use strict";
// Store DOM elements in variables
const textArea = document.querySelector("#vocabulary-input");
const sendButton = document.querySelector(".send-button");

function randomOrder() {
  // Store turkish words input into a constant named turkishWords
  const turkishWords = textArea.value;
  // Trim the end of input just in case and split it into different strings by new row mark
  const turkishWordsArr = turkishWords.trim().split("\n");
  console.log(turkishWordsArr);
}

sendButton.addEventListener("click", randomOrder);
