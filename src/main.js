import "./style.css";

import {
  backBtn,
  csvInput,
  nextBtn,
  outputList,
  wordIndexElement,
  urlSubmitBtn,
} from "./domElements.js";
import { moveNext } from "./moveNext.js";
import { onLoad } from "./onLoad.js";
import { getlastCsvJsonResult } from "./state.js";

// TODO 1: Ortaya tekrar karşına çıkarma buttonu ekleme.
// TODO 2: Stillerle oynama. Özellikle button ve icon tuşları. bu generic stilden kurtulmak.
// TODO 3: Aslında input'u shuffle ettikten sonra tüm bilgiler array'a yaymak zorunda mıyım? Array of objects olarak kalsa?
// TODO 4: Iphone safari'de kaymalar oluyor. Responsive düzeltmek!
// TODO 5: Repeat tuşu
// TODO 6: CSS'leri comment ile ayır
// TODO 7: Inputlardan biri girilince diğeri boş gözüksüns
// TODO 8: İçeride bir şey yoksa back tuşu alert versin. Dosya yükle ya da link sağla diye.
// TODO 9: Unit test yazma, popüler bir unit test library'si yükleyerek.
// TODO 1O: Başta gelen "Click Next Button to start"'tan önce gelsin ampül emojisi.
// TODO 11: aşağıdaki urlInputSubmitHandler içindeki "CSV string'i onLoad fonksiyonuna gönderelim" comment'ini ingilizce yap!
// TODO 12: revealnextinfo revealprevious'lardaki getter func'dan dönen sonucu önce readability için result vb. isimli değişkene at.
// DEVAM TODO 12: aslında tüm getter functionlar'ı başta değişkenlere atamak okunurluk açısından daha iyi olabilir.
// TODO 13: html elementlerin text content gösterme şeyleri ayrı bir function olabilir.
// TODO 14: unload.js'de en alttaki, restart şeyleri hep baştan yüklenince diye gidiyor. Bunları tek bir func.'ta toplama?

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

/* ********************* fetch json from url function ***************** */

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
