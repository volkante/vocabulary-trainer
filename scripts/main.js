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
  revealBtn,
} from "./domElements.js";

import { shuffle } from "./shuffle.js";
import { createOutput } from "./createOutput.js";
import { getArrayFromCorrectedInput, convertObjectsToArr } from "./utils.js";
import { showOne } from "./showOne.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult, setLastCsvJsonResult } from "./state.js";

/* Global variables */

let shuffledArr;
let shuffledArrObj;

/* ******************** CSV read ********************* */

function csvRead(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file, "UTF-8");
}

/* ******************** Reveal next event handler **************** */

function revealNextInfoEventHandler() {
  let wordsArr;
  if (!shuffledArrObj) {
    // Store csv array of obj
    const value = getlastCsvJsonResult();
    // Shuffle value
    shuffledArrObj = shuffle(value);
    console.log(shuffledArrObj);
  }
  wordsArr = convertObjectsToArr(shuffledArrObj);
  console.log("wordsArr", wordsArr);
  // Show first word from turkish words
  moveNext(wordsArr, csvOutput);
}

/* ******************** Randomize order event handler ************************ */

function randomOrderEventHandler() {
  // Store turkish words input into a constant named turkishWords
  const turkishWords = textArea.value;
  console.log(turkishWords);
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
  moveNext(shuffledArr, outputList);
}

/* ****************** Event Listeners ********************* */

csvInput.addEventListener("change", csvRead);
revealBtn.addEventListener("click", revealNextInfoEventHandler);
shuffleBtn.addEventListener("click", randomOrderEventHandler);
removeBtn.addEventListener("click", removeOutputContentEventHandler);
showRandomWordBtn.addEventListener("click", showRandomEventHandler);
nextBtn.addEventListener("click", nextWordEventHandler);
