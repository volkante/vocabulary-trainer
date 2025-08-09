"use strict";

import { backBtn, csvInput, csvOutput, nextBtn } from "./domElements.js";
import { moveBack } from "./moveBack.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult } from "./state.js";
import { setIndexOfDisplayedWord } from "./state.js";

// TODO 1: Android csv'yi xls'e çevirdiği için mobilde olmuyor. Çözüm bul.
// TODO 2: Deploy etme ve yoldayken kullanabilme
// TODO 3: Next ve back buttonlarına dosya yokken de tıklanabiliyor ve index of displayed word artıp-azalabiliyor. Buttonları file yoksa disable et.

/* ******************** CSV read ********************* */

function csvChangeHandler(event) {
  // When a new file is loaded, set Index of Displayed Word to -1
  setIndexOfDisplayedWord(-1);
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file, "UTF-8");
}

/* ******************** Reveal next event handler **************** */

function revealNextInfoEventHandler() {
  moveNext(getlastCsvJsonResult(), csvOutput);
}

/* ********************* Reveal previous event handler ***************** */

function revealPreviousInfoEventHandler() {
  moveBack(getlastCsvJsonResult(), csvOutput);
}

/* ****************** Event Listeners ********************* */

csvInput.addEventListener("change", csvChangeHandler);
nextBtn.addEventListener("click", revealNextInfoEventHandler);
backBtn.addEventListener("click", revealPreviousInfoEventHandler);
