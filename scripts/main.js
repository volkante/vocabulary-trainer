"use strict";

import { backBtn, csvInput, csvOutput, revealBtn } from "./domElements.js";
import { moveBack } from "./moveBack.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult } from "./state.js";

/* ******************** CSV read ********************* */

function csvChangeHandler(event) {
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

/* ********************* Reveal previous event handler ******************* */

function revealPreviousInfoEventHandler() {
  moveBack(getlastCsvJsonResult(), csvOutput);
}

/* ****************** Event Listeners ********************* */

csvInput.addEventListener("change", csvChangeHandler);
revealBtn.addEventListener("click", revealNextInfoEventHandler);
backBtn.addEventListener("click", revealPreviousInfoEventHandler);
