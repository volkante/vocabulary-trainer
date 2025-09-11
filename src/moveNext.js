import { getIndexOfWordObj, getlastCsvJsonResult } from "./state.js";

export function moveNext(wordObjArr, element) {
  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, show alert and return from the function.
  if (getIndexOfWordObj() >= getlastCsvJsonResult().length - 1) {
    alert("Word list is finished.");
    return;
  }

  /*   setIndexOfDisplayedWordInfo(getIndexOfDisplayedWordInfo() + 1);
  // Increase word index and display it
  increaseWordIndex(getIndexOfWord(), getIndexOfDisplayedWordInfo());
  wordIndexElement.textContent = getIndexOfWord();

  changeOutputTitle(outputTitle, getIndexOfDisplayedWordInfo());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWordInfo()); */
}
