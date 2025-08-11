"use strict";

import {
  getIndexOfDisplayedWord,
  getlastCsvJsonResult,
  setIndexOfDisplayedWord,
} from "./state.js";
import { createOutputsChild, changeOutputTitle } from "./utils.js";
import { outputTitle } from "./domElements.js";

export function moveNext(wordInfosArr, element) {
  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, return from the function.
  if (getIndexOfDisplayedWord() >= getlastCsvJsonResult().length - 1) {
    return;
  } else {
    setIndexOfDisplayedWord(getIndexOfDisplayedWord() + 1);
  }
  changeOutputTitle(outputTitle, getIndexOfDisplayedWord());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWord());
}
