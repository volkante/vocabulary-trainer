"use strict";

import { backBtn, csvInput, nextBtn, outputList } from "./domElements.js";
import { moveBack } from "./moveBack.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult } from "./state.js";
import { setIndexOfDisplayedWordInfo } from "./state.js";
import { createStartText } from "./utils.js";

// TODO 1: Yeni kelimeye geçtiğin anlaşılmıyor. Meaning ifadesinin rengi değişebilir.
// TODO 2: Kaç kelime kaldı, toplamda kaç gelime var. Output field'in sağ üstünde olabilir.
// TODO 3: Ortaya tekrar karşına çıkarma buttonu ekleme.
// TODO 4: Stillerle oynama. Özellikle button ve icon tuşları.
// TODO 5: Aslında input'u shuffle ettikten sonra tüm bilgileri array'a yaymak zorunda mıyım? Array of objects olarak kalsa?
// TODO 6: Iphone safari'de kaymalar oluyor. Responsive düzeltmek!
// TODO 7: Line height for sentences in output list is too low. Increase the line height.
/* ******************** CSV read ********************* */

function csvChangeHandler(event) {
  // When a new file is loaded, set Index of Displayed Word information to -1
  setIndexOfDisplayedWordInfo(-1);
  // When a new file is loaded, clear the output-list field
  outputList.replaceChildren();
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
