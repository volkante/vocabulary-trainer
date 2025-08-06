"use strict";

import { backBtn, csvInput, csvOutput, nextBtn } from "./domElements.js";
import { moveBack } from "./moveBack.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult } from "./state.js";

// TODO 1: Output ifadesini "turkish meaning", "word", "source", "example" ifadeleriyle değiştir. İçerik değiştiğinde.
// TODO 2: Android csv'yi xls'e çevirdiği için mobilde olmuyor. Çözüm bul.
// TODO 3: Deploy etme ve yoldayken kullanabilme

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

/* ********************* Reveal previous event handler ***************** */

function revealPreviousInfoEventHandler() {
  moveBack(getlastCsvJsonResult(), csvOutput);
}

/* ****************** Event Listeners ********************* */

csvInput.addEventListener("change", csvChangeHandler);
nextBtn.addEventListener("click", revealNextInfoEventHandler);
backBtn.addEventListener("click", revealPreviousInfoEventHandler);
