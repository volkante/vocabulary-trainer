"use strict";

import {
  textArea,
  outputList,
  shuffleBtn,
  showOneBtn,
  removeBtn,
  nextBtn,
} from "./domElements.js";

import { shuffle } from "./shuffle.js";

// Declare a function to clear output when next button is clicked
function removeOutputContent() {
  outputList.replaceChildren();
}

// Correct each turkish word in the array
function getArrayFromCorrectedInput(inputVal) {
  return inputVal.split("\n").map((element) => {
    return element.trim();
  });
}

function randomOrder() {
  // Store turkish words input into a constant named turkishWords
  const turkishWords = textArea.value;
  // Trim the blank space at the beginning and end of input just in case and split it into different strings by new row mark
  const turkishWordsArr = getArrayFromCorrectedInput(turkishWords);
  // Shuffle array
  const shuffledArr = shuffle(turkishWordsArr);
  console.log(shuffledArr);
}

/* ********************* Show one word ********************* */

function showOneWord() {
  // Assign 0 to show the first word in the list
  let indexRandomNums = 0;
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
    const turkishWordElement = document.createElement("li");
    turkishWordElement.textContent =
      turkishWordsArr[randomNumArr[indexRandomNums]];
    outputList.appendChild(turkishWordElement);
    console.log(turkishWordsArr);
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

  function increaseIndexRandomNums() {
    indexRandomNums++;
  }
}
// Event listeners
shuffleBtn.addEventListener("click", randomOrder);
removeBtn.addEventListener("click", removeOutputContent);
showOneBtn.addEventListener("click", showOneWord);
//nextBtn.addEventListener("click", increaseIndexRandomNums);
