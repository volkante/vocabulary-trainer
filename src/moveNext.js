import { outputTitle, wordIndexElement } from "./domElements.js";
import {
  getIndexOfWordObj,
  setIndexOfWordObj,
  getlastCsvJsonResult,
} from "./state.js";
import { createLink, createNewLines } from "./utils.js";

let wordInfoIndex = -1;
let objectPropertyLength;

export function moveNext(wordObjArr, element) {
  objectPropertyLength = Object.entries(wordObjArr[0]).length;

  wordInfoIndex++;

  if (wordInfoIndex === objectPropertyLength) {
    const nextIndexOfWordObj = getIndexOfWordObj() + 1;
    setIndexOfWordObj(nextIndexOfWordObj);
    wordInfoIndex = 0;
  }

  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, show alert and return from the function.
  if (getIndexOfWordObj() >= getlastCsvJsonResult().length) {
    alert("Word list is finished.");
    return;
  }

  /*  Word Index Header */
  wordIndexElement.textContent = getIndexOfWordObj() + 1;

  console.log("get index", getIndexOfWordObj());

  /* OUTPUT TITLE */
  const wordInfos = Object.entries(wordObjArr[getIndexOfWordObj()]);

  let currWordInfo = wordInfos[wordInfoIndex];

  outputTitle.textContent = currWordInfo[0];

  /* OUTPUT LIST */

  // Reset the previous word info (li element) each time this function's called
  element.replaceChildren();
  let wordElement;
  const content = currWordInfo[1];
  // If revealed info is a link, make it anchor element
  if (content.startsWith("https")) {
    wordElement = document.createElement("li");
    createLink(content, wordElement);
    element.appendChild(wordElement);
    // If revealed info is not a link but a plain text:
  } else {
    // If the text has a new line (e.g. more than one example), place one under the other in the output
    if (content.includes("\n")) {
      createNewLines(element, content);
      // If text does not have a new line (e.g. just one example), write it simply to the list element
    } else {
      wordElement = document.createElement("li");
      wordElement.textContent = content;
      element.appendChild(wordElement);
    }
  }

  /*   setIndexOfDisplayedWordInfo(getIndexOfDisplayedWordInfo() + 1);
  // Increase word index and display it
  increaseWordIndex(getIndexOfWord(), getIndexOfDisplayedWordInfo());
  wordIndexElement.textContent = getIndexOfWord();

  changeOutputTitle(outputTitle, getIndexOfDisplayedWordInfo());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWordInfo()); */
}
