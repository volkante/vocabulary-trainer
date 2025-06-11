"use strict";

// Store DOM elements in variables

// input - output
const textArea = document.querySelector("#vocabulary-input");
const outputList = document.querySelector(".output-list");
// Buttons
const shuffleBtn = document.querySelector(".btn--shuffle-input");
const removeBtn = document.querySelector(".btn--remove-output");
const nextBtn = document.querySelector(".btn--next");
const showOneBtn = document.querySelector(".btn--show-one");

// Declare a function to clear output when next button is clicked
function removeOutputContent() {
  outputList.replaceChildren();
}

function randomOrder() {
  // Store turkish words input into a constant named turkishWords
  const turkishWords = textArea.value;
  // Trim the blank space at the beginning and end of input just in case and split it into different strings by new row mark
  const turkishWordsArr = turkishWords.trim().split("\n");
  // Create a random numbers array to store random numbers
  const randomNumArr = [];
  // Add random numbers to the random numbers array by calling create random number function
  for (let i = 0; i < turkishWordsArr.length; i++) {
    randomNumArr.push(createRandomNum());
  }

  console.log(randomNumArr);

  // Iterate over the turkish words to sort them randomly
  createOutput(turkishWordsArr);
  // Clear input after displaying output
  clearInput();

  function createOutput(turkishWordsArr) {
    if (turkishWordsArr.length <= 1) return;
    for (let i = 0; i < turkishWordsArr.length; i++) {
      // Create a list element for each word
      const turkishWordElement = document.createElement("li");
      // Take the list element's text content from turkish words arr
      // by using the randomNumArr's elements as index number
      // to output words in a different order each time
      turkishWordElement.textContent = turkishWordsArr[randomNumArr[i]];
      // Add list element to its parent to display it
      outputList.appendChild(turkishWordElement);
    }
    console.log(turkishWordsArr);
    console.log(outputList);
  }

  // Declare a function to create a random num
  function createRandomNum() {
    // If there is no input or one word, end the function
    if (turkishWordsArr.length <= 1) return;
    // Create a random integer between 0 and the length of turkish words array
    let randomNum = Math.floor(Math.random() * turkishWordsArr.length);
    // If the random number is already found in random number array, recreate a random number
    while (randomNumArr.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * turkishWordsArr.length);
    }
    return randomNum;
  }

  function clearInput() {
    textArea.value = "";
  }
}

// Event listeners
shuffleBtn.addEventListener("click", randomOrder);
removeBtn.addEventListener("click", removeOutputContent);
