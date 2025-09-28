import "./style.css";

import {
  backBtn,
  csvInput,
  nextBtn,
  outputList,
  wordIndexElement,
  urlSubmitBtn,
  revisitBtn,
  totalWordlistLength,
  outputTitle,
} from "./domElements.js";
import { moveNext } from "./moveNext.js";
import { moveBack } from "./moveBack.js";
import { onLoad } from "./onLoad.js";
import {
  getlastCsvJsonResult,
  addToRevisitList,
  getIndexOfWordObj,
  getWordInfoIndex,
  getRevisitList,
} from "./state.js";

// TODO 1: Stillerle oynama. Özellikle button ve icon tuşları. bu generic stilden kurtulmak.
// TODO 2: CSS'leri ayrıntılı comment ile ayır
// (ÖNERİ) TODO 3: Inputlardan biri girilince diğeri boş gözüksün.
// TODO 4: İçeride bir şey yoksa back tuşu alert versin. Dosya yükle ya da link sağla diye.
// TODO 5: Unit test yazma, popüler bir unit test library'si yükleyerek. Sürekli bug çıkıyor. Soruna baştan çözüm.
// TODO 6: revealnextinfo revealprevious'lardaki getter func'dan dönen sonucu önce readability için result vb. isimli değişkenle at.
// DEVAM TODO 6: aslında tüm getter functionlar'ı başta değişkenlere atamak okunurluk açısından daha iyi olabilir.
// TODO 7: html elementlerin text content gösterme şeyleri ayrı bir function olabilir.
// TODO 8: unload.js'de en alttaki, restart şeyleri hep baştan yüklenince diye gidiyor. Bunları tek bir func.'ta toplama
// TODO 9: Bitti ve başlama alertlerinin içine emoji eklemek. tatlılaştırmak (comeaunun önerisi çünkü böyle çok sert duruyor demişti alertler itici geliyor)
// TODO 10: Liste'de yeni kelimeye geçtiği anlaşılmıyor. Meaning title başına bir yeni emojisi vb. bir emoji eklemek.
// TODO 11: Kelime ekleme'de toastify ile eklendiğini bildirmek olabilir!
// TODO 12: README OLUŞTUR.

/* ******************** CSV read ********************* */

function csvChangeHandler(event) {
  const file = event.target.files[0];
  // If no file is uploaded, reset output section
  if (!file) {
    outputList.replaceChildren();
    wordIndexElement.textContent = 0;
    outputTitle.textContent = "Output";
    return;
  }

  // Reset output title when a new file is chosen
  outputTitle.textContent = "Output";

  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file, "UTF-8");
}

/* ********************* fetch json from url function ***************** */

async function urlInputSubmitHandler() {
  const sheetUrl = document.getElementById("sheetUrl").value;

  if (!sheetUrl) return;

  // Reset output title when a new URL is submitted
  outputTitle.textContent = "Output";

  const charIndexToRemoveUnnecessaryPart = sheetUrl.indexOf("edit");
  const clearApiLink = sheetUrl
    .slice(0, charIndexToRemoveUnnecessaryPart)
    .concat("gviz/tq?tqx=out:csv");

  try {
    const response = await fetch(clearApiLink);
    if (!response.ok) throw new Error("Network error: " + response.status);

    const csvString = await response.text();

    // Send CSV string to onLoad function
    onLoad({ target: { result: csvString } });
  } catch (err) {
    console.error("Fetch error:", err);
    outputList.innerHTML = `<li style="color: red">Hata: ${err.message}</li>`;
    outputTitle.textContent = "Output";
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
  const wordObjects = getlastCsvJsonResult();
  const wordObjIndex = getIndexOfWordObj();
  const wordInfoIndex = getWordInfoIndex();

  if (!wordObjects || wordObjects.length === 0) {
    alert("📚 Please upload a CSV file or paste a sheet URL first");
    return;
  }
  // Sadece ilk meaning gösteriliyorsa ekle
  if (
    wordObjIndex >= 0 &&
    wordObjIndex < wordObjects.length &&
    wordInfoIndex !== -1
  ) {
    const currentObj = wordObjects[wordObjIndex];
    addToRevisitList(currentObj);
    console.log("🔄 Word added to revisit list!");

    // Güncelle: revisit eklendiği anda toplam sayıyı artır ve DOM'u güncelle
    const updatedTotal = wordObjects.length + getRevisitList().length;
    totalWordlistLength.textContent = updatedTotal;
  }
}

/* ****************** Event Listeners ********************* */

csvInput.addEventListener("change", csvChangeHandler);
urlSubmitBtn.addEventListener("click", urlInputSubmitHandler);
nextBtn.addEventListener("click", revealNextInfoEventHandler);
backBtn.addEventListener("click", revealPreviousInfoEventHandler);
revisitBtn.addEventListener("click", revisitEventHandler);
