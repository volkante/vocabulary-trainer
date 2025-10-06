import "./style.css";

import {
  backBtn,
  csvInput,
  nextBtn,
  outputList,
  wordIndexElement,
  urlSubmitBtn,
  revisitBtn,
  outputTitle,
} from "./domElements.js";
import { moveNext } from "./moveNext.js";
import { moveBack } from "./moveBack.js";
import { onLoad } from "./onLoad.js";
import { revisit } from "./revisit.js";
import {
  setElementTextContent,
  clearElement,
  resetOutput,
} from "./presenter.js";
import { clearApiLink } from "./utils.js";

// TODO 1: Stillerle oynama. Özellikle button ve icon tuşları. bu generic stilden kurtulmak.
// TODO 2: CSS'leri ayrıntılı comment ile ayır
// (ÖNERİ) TODO 3: Inputlardan biri girilince diğeri boş gözüksün.
// TODO 3: Unit test yazma, popüler bir unit test library'si yükleyerek. Sürekli bug çıkıyor. Soruna baştan çözüm.
// TODO 4: revealnextinfo revealprevious'lardaki getter func'dan dönen sonucu önce readability için result vb. isimli değişkenle at.
// DEVAM TODO 4: aslında tüm getter functionlar'ı başta değişkenlere atamak okunurluk açısından daha iyi olabilir.
// TODO 5: html elementlerin text content gösterme şeyleri ayrı bir function olabilir.
// TODO 6: unload.js'de en alttaki, restart şeyleri hep baştan yüklenince diye gidiyor. Bunları tek bir func.'ta toplama
// TODO 7: Bitti ve başlama alertlerinin içine emoji eklemek. tatlılaştırmak (comeaunun önerisi çünkü böyle çok sert duruyor demişti alertler itici geliyor)
// TODO 8: Kelime ekleme'de toastify ile eklendiğini bildirmek olabilir!
// TODO 9: README OLUŞTUR.

/* ******************** CSV read ********************* */

function csvChangeHandler(event) {
  const file = event.target.files[0];
  // If no file is uploaded, reset output section
  if (!file) {
    resetOutput(outputList, wordIndexElement, outputTitle);
    return;
  }

  // Reset output title when a new file is chosen
  setElementTextContent(outputTitle, "Output");

  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file, "UTF-8");
}

/* ********************* fetch json from url function ***************** */

async function urlInputSubmitHandler() {
  const unformattedApiLink = document.getElementById("sheetUrl").value;

  if (!sheetUrl) return;

  // Reset output title when a new URL is submitted
  setElementTextContent(outputTitle, "Output");
  // Format api address to get csv link from google sheets according to google sheets rules
  const formattedApiLink = clearApiLink(unformattedApiLink);

  try {
    const response = await fetch(formattedApiLink);
    if (!response.ok) throw new Error("Network error: " + response.status);
    const csvString = await response.text();

    // Send CSV string to onLoad function
    onLoad({ target: { result: csvString } });
  } catch (err) {
    console.error("Fetch error:", err);
    outputList.innerHTML = `<li style="color: red">Hata: ${err.message}</li>`;
    setElementTextContent(outputTitle, "Output");
  }
}

/* ******************** Reveal next event handler **************** */

function revealNextInfoEventHandler() {
  // Move to the next information if we have data (either from CSV or URL)
  moveNext(outputList);
}

/* ********************* Reveal previous event handler ***************** */

function revealPreviousInfoEventHandler() {
  // Move to previous information if we have data (either from CSV or URL)
  moveBack(outputList);
}

/* ********************* Revisit event handler ***************** */

function revisitEventHandler() {
  revisit();
}

/* ****************** Event Listeners ********************* */

csvInput.addEventListener("change", csvChangeHandler);
urlSubmitBtn.addEventListener("click", urlInputSubmitHandler);
nextBtn.addEventListener("click", revealNextInfoEventHandler);
backBtn.addEventListener("click", revealPreviousInfoEventHandler);
revisitBtn.addEventListener("click", revisitEventHandler);
