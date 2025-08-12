"use strict";

import {
  getIndexOfDisplayedWordInfo,
  getlastCsvJsonResult,
  setIndexOfDisplayedWordInfo,
} from "./state.js";
import { createOutputsChild, changeOutputTitle } from "./utils.js";
import { outputTitle } from "./domElements.js";

export function moveNext(wordInfosArr, element) {
  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, return from the function.
  if (getIndexOfDisplayedWordInfo() >= getlastCsvJsonResult().length - 1) {
    return;
  } else {
    setIndexOfDisplayedWordInfo(getIndexOfDisplayedWordInfo() + 1);
  }
  changeOutputTitle(outputTitle, getIndexOfDisplayedWordInfo());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWordInfo());
  console.log(getIndexOfDisplayedWordInfo());
}
