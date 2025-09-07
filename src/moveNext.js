import {
  getIndexOfDisplayedWordInfo,
  getIndexOfWord,
  getlastCsvJsonResult,
  setIndexOfDisplayedWordInfo,
} from "./state.js";
import {
  createOutputsChild,
  changeOutputTitle,
  increaseWordIndex,
} from "./utils.js";
import { outputTitle, wordIndexElement } from "./domElements.js";

export function moveNext(wordInfosArr, element) {
  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, show alert and return from the function.
  if (getIndexOfDisplayedWordInfo() >= getlastCsvJsonResult().length - 1) {
    alert("Word list is finished.");
    return;
  } else {
    setIndexOfDisplayedWordInfo(getIndexOfDisplayedWordInfo() + 1);
    // Increase word index and display it
    increaseWordIndex(getIndexOfWord(), getIndexOfDisplayedWordInfo());
    wordIndexElement.textContent = getIndexOfWord();
  }
  changeOutputTitle(outputTitle, getIndexOfDisplayedWordInfo());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWordInfo());
}
