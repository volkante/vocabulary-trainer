"use strict";
// Store DOM elements in variables
const textArea = document.querySelector("#vocabulary-input");
const sendButton = document.querySelector(".send-button");
const outputList = document.querySelector(".output-list");

// Store turkish words input into a constant named turkishWords
const turkishWords = textArea.value;
// Trim the blank space at the beginning and end of input just in case and split it into different strings by new row mark
const turkishWordsArr = turkishWords.trim().split("\n");

function createRandomNum() {
  const randomNum = Math.floor(Math.random() * turkishWordsArr.length);
  return randomNum;
}

function randomOrder() {
  // Create a random numbers array to store random numbers
  const randomNumArr = [];
  for (let i = 0; i < turkishWordsArr.length; i++) {
    randomNumArr.push(createRandomNum());
  }
  console.log(randomNumArr);
  // Iterate over the turkish words to sort them randomly
  for (let i = 0; i < turkishWordsArr.length; i++) {
    // Create a list element for each word
    const turkishWordElement = document.createElement("li");
    // Take the list element's text content from turkish words arr
    // by using the randomNumArr's elements as index number
    // to ouput words in a different order each time
    turkishWordElement.textContent = turkishWordsArr[randomNumArr[i]];
    // Add list element to its parent to display it
    outputList.appendChild(turkishWordElement);
  }
}

sendButton.addEventListener("click", randomOrder);
