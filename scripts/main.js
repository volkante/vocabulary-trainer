"use strict";

import {
  textArea,
  outputList,
  shuffleBtn,
  showRandomWordBtn,
  removeBtn,
  nextBtn,
} from "./domElements.js";

import { shuffle } from "./shuffle.js";
import { createOutput } from "./createOutput.js";
import { getArrayFromCorrectedInput } from "./utils.js";
import { showOne } from "./showOne.js";
import { moveNext } from "./moveNext.js";

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

/* ****************** Event Listeners ********************* */

shuffleBtn.addEventListener("click", randomOrderEventHandler);
removeBtn.addEventListener("click", removeOutputContentEventHandler);
showRandomWordBtn.addEventListener("click", showRandomEventHandler);
nextBtn.addEventListener("click", nextWordEventHandler);

/* CSV read */
function csvRead(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = onLoadFunction;

  reader.readAsText(file, "UTF-8");
}

function onLoadFunction(e) {
  const text = e.target.result;
  document.getElementById("output").textContent = text;
}

document.getElementById("csvInput").addEventListener("change", csvRead);

/* CSV TO JSON */

const csv = `album, year, US_peak_chart_post
The White Stripes, 1999, -
De Stijl, 2000, -
White Blood Cells, 2001, 61
Elephant, 2003, 6
Get Behind Me Satan, 2005, 3
Icky Thump, 2007, 2
Under Great White Northern Lights, 2010, 11
Live in Mississippi, 2011, -
Live at the Gold Dollar, 2012, -
Nine Miles from the White City, 2013, -`;

const json = CSVJSON.csv2json(csv, { parseNumbers: true });
console.log(json);
