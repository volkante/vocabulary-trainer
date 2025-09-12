import { outputTitle, wordIndexElement } from "./domElements.js";
import {
  getIndexOfWordObj,
  setIndexOfWordObj,
  getWordInfoIndex,
  setWordInfoIndex,
  getlastCsvJsonResult,
} from "./state.js";
import { changeOutputTitle, createLink, createNewLines } from "./utils.js";

export function moveNext(wordObjArr, element) {
  // Store the number of word information titles to determine when to change output title
  let objectPropertyLength = Object.entries(wordObjArr[0]).length;

  // Increase word information index by 1 to be able to move to new title and word information
  setWordInfoIndex(getWordInfoIndex() + 1);

  // If word information is finished, move to new word object and set the word information index to 0
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

  console.log("get index", getIndexOfWordObj());

  // Store each word's informations in an array of arrays(title, definition)
  const wordInfos = Object.entries(wordObjArr[getIndexOfWordObj()]);
  console.log("wordinfos: ", wordInfos);

  // Store each word information in a variable by means of word information index that increases by each click
  let currWordInfo = wordInfos[getWordInfoIndex()];

  /* CHANGE OUTPUT TITLE */

  changeOutputTitle(outputTitle, currWordInfo);

  /* CREATE OUTPUT LIST ITEMS */

  /* TODO 1: BU AŞAĞIDAKİ CREATE OUTPUT LIST UTILS'E FUNCTION OLARAK GİDECEK. UTILS'E BAK! */

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
