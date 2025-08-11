"use strict";

import { backBtn, csvInput, nextBtn, outputList } from "./domElements.js";
import { moveBack } from "./moveBack.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult } from "./state.js";
import { setIndexOfDisplayedWord } from "./state.js";
import { createStartText } from "./utils.js";

// TODO 1: Deploy etme ve yoldayken kullanabilme

/* ******************** CSV read ********************* */

function csvChangeHandler(event) {
  // When a new file is loaded, set Index of Displayed Word to -1
  setIndexOfDisplayedWord(-1);
  // When a new file is loaded, create and display the start text in output element.
  createStartText(outputList);
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file, "UTF-8");
}

/* ******************** Reveal next event handler **************** */

function revealNextInfoEventHandler() {
  // Move to the next information only if csv input exists
  if (!(csvInput.files.length === 0))
    moveNext(getlastCsvJsonResult(), outputList);
}

/* ********************* Reveal previous event handler ***************** */

function revealPreviousInfoEventHandler() {
  // move to previous information only if csv input is not empty
  if (!(csvInput.files.length === 0))
    moveBack(getlastCsvJsonResult(), outputList);
}

/* ****************** Event Listeners ********************* */

csvInput.addEventListener("change", csvChangeHandler);
nextBtn.addEventListener("click", revealNextInfoEventHandler);
backBtn.addEventListener("click", revealPreviousInfoEventHandler);
