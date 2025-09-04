import {
  getIndexOfDisplayedWordInfo,
  setIndexOfDisplayedWordInfo,
  getIndexOfWord,
} from "./state.js";
import {
  createOutputsChild,
  changeOutputTitle,
  decreaseWordIndex,
} from "./utils.js";
import { outputTitle, wordIndexElement } from "./domElements.js";

export function moveBack(wordInfosArr, element) {
  // Prevent index of displayed word from going below 0: If index is 0, return from the function.
  if (getIndexOfDisplayedWordInfo() > 0) {
    setIndexOfDisplayedWordInfo(getIndexOfDisplayedWordInfo() - 1);
    // Decrease word index and display it
    decreaseWordIndex(getIndexOfWord(), getIndexOfDisplayedWordInfo());
    wordIndexElement.textContent = getIndexOfWord();
  } else {
    return;
  }

  changeOutputTitle(outputTitle, getIndexOfDisplayedWordInfo());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWordInfo());
  console.log(getIndexOfDisplayedWordInfo());
}
