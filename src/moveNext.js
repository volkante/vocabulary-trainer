import { outputTitle, wordIndexElement } from "./domElements.js";
import {
  getIndexOfWordObj,
  setIndexOfWordObj,
  getWordInfoIndex,
  setWordInfoIndex,
  getlastCsvJsonResult,
} from "./state.js";
import { changeOutputTitle, createOutputsChild } from "./utils.js";

export function moveNext(wordObjects, element) {
  // Get the number of properties(word information titles) from the first word object to determine when to change output title
  let objectPropertyLength = Object.keys(wordObjects[0]).length;

  // Increase word information index by 1 to be able to move to new title and word information
  setWordInfoIndex(getWordInfoIndex() + 1);

  // If word informations are finished, move to new word object and set the word information index to 0
  if (getWordInfoIndex() === objectPropertyLength) {
    const nextIndexOfWordObj = getIndexOfWordObj() + 1;
    setIndexOfWordObj(nextIndexOfWordObj);
    setWordInfoIndex(0);
  }

  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, show alert and return from the function.
  if (getIndexOfWordObj() >= getlastCsvJsonResult().length) {
    alert("Word list is finished.");
    return;
  }

  /*  Word Index Header */
  wordIndexElement.textContent = getIndexOfWordObj() + 1;
  console.log("get index: ", getIndexOfWordObj());

  // Get all wordTitles in an array
  const wordTitles = Object.keys(wordObjects[getIndexOfWordObj()]);
  // Store the current title
  let currWordTitle = wordTitles[getWordInfoIndex()];
  // Change output title
  changeOutputTitle(outputTitle, currWordTitle);

  // Get word informations (definitions, examples e.g.)
  const wordFieldValues = Object.values(wordObjects[getIndexOfWordObj()]);
  // Store each word information in a variable by means of word information index that increases by each click
  let currWordInfo = wordFieldValues[getWordInfoIndex()];
  // Create output list items
  createOutputsChild(element, currWordInfo);
}
