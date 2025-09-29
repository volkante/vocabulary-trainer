import {
  getlastCsvJsonResult,
  addToRevisitList,
  getIndexOfWordObj,
  getWordInfoIndex,
  getRevisitList,
} from "./state.js";

import { setElementTextContent } from "./presenter.js";

import { totalWordlistLength } from "./domElements.js";

export function revisit() {
  const wordObjects = getlastCsvJsonResult();
  const wordObjIndex = getIndexOfWordObj();
  const wordInfoIndex = getWordInfoIndex();

  // If there is no word list or an empty wordlist uploaded
  if (!wordObjects || wordObjects.length === 0) {
    alert("📚 Please upload a CSV file or paste a sheet URL first!");
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

    // revisit eklendiği anda toplam sayıyı artır ve DOM'u güncelle
    const updatedTotal = wordObjects.length + getRevisitList().length;
    setElementTextContent(totalWordlistLength, updatedTotal);
  }
}
