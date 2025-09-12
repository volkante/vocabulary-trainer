import { outputTitle } from "./domElements.js";
import { getIndexOfWordObj, getlastCsvJsonResult } from "./state.js";

let wordInfoIndex = -1;
export function moveNext(wordObjArr, element) {
  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, show alert and return from the function.
  if (getIndexOfWordObj() >= getlastCsvJsonResult().length - 1) {
    alert("Word list is finished.");
    return;
  }

  let objectPropertyLength = Object.entries(wordObjArr[0]).length;

  wordInfoIndex++;

  const wordInfos = Object.entries(wordObjArr[0]);

  outputTitle.textContent = wordInfos[wordInfoIndex][0];

  console.log(wordInfos);

  /*   setIndexOfDisplayedWordInfo(getIndexOfDisplayedWordInfo() + 1);
  // Increase word index and display it
  increaseWordIndex(getIndexOfWord(), getIndexOfDisplayedWordInfo());
  wordIndexElement.textContent = getIndexOfWord();

  changeOutputTitle(outputTitle, getIndexOfDisplayedWordInfo());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWordInfo()); */
}
