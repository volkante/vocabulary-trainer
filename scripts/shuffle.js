"use strict";

import { outputList } from "./domElements.js";

export function shuffle(arr) {
  if (!Array.isArray(arr)) throw new Error("Expected Array");
  const shuffledArr = [];
  // Create a random numbers array to store random numbers
  const randomNumArr = [];
  // Add random numbers to the random numbers array by calling create random number function
  for (let i = 0; i < arr.length; i++) {
    randomNumArr.push(createRandomNum(arr));
  }

  console.log(randomNumArr);

  // Iterate over the turkish words to sort them randomly
  createOutput(arr);

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
  }

  // Declare a function to create a random num
  function createRandomNum(turkishWordsArr) {
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
  return shuffledArr;
}
