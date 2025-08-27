"use strict";

import {
  backBtn,
  csvInput,
  nextBtn,
  outputList,
  wordIndexElement,
} from "./domElements.js";
import { moveBack } from "./moveBack.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult } from "./state.js";

// TODO 1: Ortaya tekrar karşına çıkarma buttonu ekleme.
// TODO 2: Stillerle oynama. Özellikle button ve icon tuşları.
// TODO 3: Aslında input'u shuffle ettikten sonra tüm bilgiler array'a yaymak zorunda mıyım? Array of objects olarak kalsa?
// TODO 4: Iphone safari'de kaymalar oluyor. Responsive düzeltmek!

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

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQ_2Er_ncGu3LgJ19zG8zmwbWcJlcLDxJSR2lNRuybfu_zCVCmvOZ1Xg-q_YcOfquEQbzRnSWUXomX/pub?output=csv";

const DENEME =
  "https://docs.google.com/spreadsheets/d/1fUPOLbQFSogaPcoCZGhLCdOZakNwbnburLPEq_xNRMQ/gviz/tq?tqx=out:csv&gid=136879385";

const deneme2 =
  "https://docs.google.com/spreadsheets/d/13BH_Js2hf-ee3l4SvM16pYv0QMCWOXHy_RZFCDik-Oc/gviz/tq?tqx=out:csv&gid=136879385";

async function loadSheet() {
  try {
    const response = await fetch(deneme2);
    console.log(response);
    if (!response.ok) throw new Error("Network error: " + response.status);

    const csvString = await response.text();

    const parsed = Papa.parse(csvString, {
      header: true, // use first row as column names
      skipEmptyLines: true,
    });

    console.log(parsed.data); // array of objects
    document.getElementById("output").textContent = JSON.stringify(
      parsed.data,
      null,
      2
    );
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

loadSheet();
