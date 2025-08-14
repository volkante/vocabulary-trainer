"use strict";

import { backBtn, csvInput, nextBtn, outputList } from "./domElements.js";
import { moveBack } from "./moveBack.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult } from "./state.js";

// TODO 1: Ortaya tekrar karşına çıkarma buttonu ekleme.
// TODO 2: Stillerle oynama. Özellikle button ve icon tuşları.
// TODO 3: Aslında input'u shuffle ettikten sonra tüm bilgileri array'a yaymak zorunda mıyım? Array of objects olarak kalsa?
// TODO 4: Iphone safari'de kaymalar oluyor. Responsive düzeltmek!

/* ******************** CSV read ********************* */

function csvChangeHandler(event) {
  const file = event.target.files[0];
  if (!file) {
    outputList.replaceChildren();
    return;
  }
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
