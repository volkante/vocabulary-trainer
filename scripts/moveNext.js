"use strict";

import {
  getIndexOfWord,
  getIndexOfWordInfoField,
  getlastCsvJsonResult,
  setIndexOfWord,
  setIndexOfWordInfoField,
} from "./state.js";
import { outputList, outputTitle } from "./domElements.js";

export function moveNext(wordsArr, element) {
  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, return from the function.

  const obj = wordsArr[getIndexOfWord()];

  const wordInfosArr = Object.entries(obj);

  console.log(wordInfosArr);

  const currWordInfosArr = wordInfosArr[getIndexOfWordInfoField()];

  console.log(currWordInfosArr);

  console.log("wordindex", getIndexOfWord());
  console.log("wordinfoindex", getIndexOfWordInfoField());

  // Move to the next word if word infos are finished
  /* if (currWordInfosArr.length - 1 === getIndexOfWordInfoField()) {
    setIndexOfWord(getIndexOfWord() + 1);
    setIndexOfWordInfoField(0);
  } */

  // Change title
  outputTitle.textContent = currWordInfosArr[0];
  setIndexOfWordInfoField(getIndexOfWordInfoField() + 1);
  // Change output
  outputList.replaceChildren();
  let wordText = document.createElement("li");
  wordText.textContent = currWordInfosArr[1];
  outputList.appendChild(wordText);
}
