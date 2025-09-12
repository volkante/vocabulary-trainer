import { outputTitle } from "./domElements.js";
import { getIndexOfWordObj, getlastCsvJsonResult } from "./state.js";

let wordInfoIndex = -1;
let wordIndexObj = 0;
let objectPropertyLength;

export function moveNext(wordObjArr, element) {
  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, show alert and return from the function.
  if (getIndexOfWordObj() >= getlastCsvJsonResult().length - 1) {
    alert("Word list is finished.");
    return;
  }

  objectPropertyLength = Object.entries(wordObjArr[0]).length;
  console.log("objectpropertylength", objectPropertyLength);

  wordInfoIndex++;

  if (wordInfoIndex === objectPropertyLength) {
    console.log(wordInfoIndex === objectPropertyLength);
    wordIndexObj++;
    wordInfoIndex = 0;
  }

  const wordInfos = Object.entries(wordObjArr[wordIndexObj]);

  console.log(wordInfos);
  console.log("wordinfoindex", wordInfoIndex);
  console.log("key", wordInfos[wordInfoIndex]);
  outputTitle.textContent = wordInfos[wordInfoIndex][0];

  /*   setIndexOfDisplayedWordInfo(getIndexOfDisplayedWordInfo() + 1);
  // Increase word index and display it
  increaseWordIndex(getIndexOfWord(), getIndexOfDisplayedWordInfo());
  wordIndexElement.textContent = getIndexOfWord();

  changeOutputTitle(outputTitle, getIndexOfDisplayedWordInfo());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWordInfo()); */
}
