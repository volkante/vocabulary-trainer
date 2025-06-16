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
import { createOutput } from "./createOutput.js";
import { getArrayFromCorrectedInput } from "./utils.js";

/* ******************** Randomize order event handler ************************ */

function randomOrderEventHandler() {
  // Store turkish words input into a constant named turkishWords
  const turkishWords = textArea.value;
  // Trim the blank space at the beginning and end of input just in case and split it into different strings by new row mark
  const turkishWordsArr = getArrayFromCorrectedInput(turkishWords);
  // Shuffle turkish words
  const shuffledArr = shuffle(turkishWordsArr);
  // Display shuffled words
  createOutput(shuffledArr);
}

/* ******************** Clear output list event handler ******************** */

// Declare a function to clear output when butto "next" is clicked
function removeOutputContentEventHandler() {
  outputList.replaceChildren();
}

/* ********************* Show one word event handler ********************* */

function showOneEventHandler() {
  // Store turkish words input into a constant named turkishWords
  const turkishWords = textArea.value;
  // Trim the blank space at the beginning and end of input just in case and split it into different strings by new row mark
  const turkishWordsArr = getArrayFromCorrectedInput(turkishWords);
  // Shuffle turkish words
  const shuffledArr = shuffle(turkishWordsArr);
  showOne(turkishWordsArr);
}

function showOne(turkishWordsArr) {
  removeOutputContentEventHandler();
  let wordElement = document.createElement("li");
  wordElement.textContent = turkishWordsArr[0];
  outputList.appendChild(wordElement);
}

/* ****************** Event Listeners ********************* */
shuffleBtn.addEventListener("click", randomOrderEventHandler);
removeBtn.addEventListener("click", removeOutputContentEventHandler);
showOneBtn.addEventListener("click", showOneEventHandler);
//nextBtn.addEventListener("click", increaseIndexRandomNums);
