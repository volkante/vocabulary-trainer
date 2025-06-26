"use strict";

import {
  textArea,
  outputList,
  shuffleBtn,
  showRandomWordBtn,
  removeBtn,
  nextBtn,
  csvInput,
  csvOutput,
} from "./domElements.js";

import { shuffle } from "./shuffle.js";
import { createOutput } from "./createOutput.js";
import { getArrayFromCorrectedInput } from "./utils.js";
import { showOne } from "./showOne.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";

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

function showRandomEventHandler() {
  // Store turkish words input into a constant named turkishWords
  const turkishWords = textArea.value;
  // Trim the blank space at the beginning and end of input just in case and split it into different strings by new row mark
  const turkishWordsArr = getArrayFromCorrectedInput(turkishWords);
  // Shuffle turkish words
  const shuffledArr = shuffle(turkishWordsArr);
  // Show first word from turkish words
  showOne(shuffledArr);
}

/* ********************* Next word event handler ********************* */

let shuffledArr;
function nextWordEventHandler() {
  if (!shuffledArr) {
    // Store turkish words input into a constant named turkishWords
    const turkishWords = textArea.value;
    // Trim the blank space at the beginning and end of input just in case and split it into different strings by new row mark
    const turkishWordsArr = getArrayFromCorrectedInput(turkishWords);
    // Shuffle turkish words
    shuffledArr = shuffle(turkishWordsArr);
    console.log(shuffledArr);
  }
  // Show first word from turkish words
  moveNext(shuffledArr);
}

/* ******************** CSV read ********************* */

function csvRead(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file, "UTF-8");
}

/* ****************** Event Listeners ********************* */

shuffleBtn.addEventListener("click", randomOrderEventHandler);
removeBtn.addEventListener("click", removeOutputContentEventHandler);
showRandomWordBtn.addEventListener("click", showRandomEventHandler);
nextBtn.addEventListener("click", nextWordEventHandler);
csvInput.addEventListener("change", csvRead);
