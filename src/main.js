import "./style.css";
import Papa from "papaparse";

import {
  backBtn,
  csvInput,
  nextBtn,
  outputList,
  wordIndexElement,
  urlSubmitBtn,
} from "./domElements.js";
import { moveBack } from "./moveBack.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult } from "./state.js";

// TODO 1: Ortaya tekrar karşına çıkarma buttonu ekleme.
// TODO 2: Stillerle oynama. Özellikle button ve icon tuşları.
// TODO 3: Aslında input'u shuffle ettikten sonra tüm bilgiler array'a yaymak zorunda mıyım? Array of objects olarak kalsa?
// TODO 4: Iphone safari'de kaymalar oluyor. Responsive düzeltmek!
// TODO 5: Gidecek kelime kalmayınca, yani next çalışmayınca bir window.alert vb. eklemek?
// TODO 6: Repeat tuşu

/* ******************** CSV read ********************* */

function csvChangeHandler(event) {
  const file = event.target.files[0];
  // If no file is uploaded, reset output section
  if (!file) {
    outputList.replaceChildren();
    wordIndexElement.textContent = 0;
    return;
  }
  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file, "UTF-8");
}

/* ********************* Url api function ***************** */

async function urlInputSubmitHandler() {
  const sheetUrl = document.getElementById("sheetUrl").value;
  if (!sheetUrl) return;

  const charIndexToRemoveUnnecessaryPart = sheetUrl.indexOf("edit");
  const clearApiLink = sheetUrl
    .slice(0, charIndexToRemoveUnnecessaryPart)
    .concat("gviz/tq?tqx=out:csv");

  try {
    const response = await fetch(clearApiLink);
    if (!response.ok) throw new Error("Network error: " + response.status);

    const csvString = await response.text();

    // CSV string'i onLoad fonksiyonuna gönderelim
    onLoad({ target: { result: csvString } });
  } catch (err) {
    console.error("Fetch error:", err);
    outputList.innerHTML = `<li style="color: red">Hata: ${err.message}</li>`;
  }
}

/* ******************** Reveal next event handler **************** */

function revealNextInfoEventHandler() {
  // Move to the next information if we have data (either from CSV or URL)
  if (getlastCsvJsonResult()) {
    moveNext(getlastCsvJsonResult(), outputList);
  }
}

/* ********************* Reveal previous event handler ***************** */

function revealPreviousInfoEventHandler() {
  // move to previous information if we have data (either from CSV or URL)
  if (getlastCsvJsonResult()) {
    moveBack(getlastCsvJsonResult(), outputList);
  }
}

/* ****************** Event Listeners ********************* */

csvInput.addEventListener("change", csvChangeHandler);
urlSubmitBtn.addEventListener("click", urlInputSubmitHandler);
nextBtn.addEventListener("click", revealNextInfoEventHandler);
backBtn.addEventListener("click", revealPreviousInfoEventHandler);
