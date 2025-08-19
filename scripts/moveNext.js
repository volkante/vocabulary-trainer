"use strict";

import {
  getIndexOfWord,
  getlastCsvJsonResult,
  setIndexOfWord,
} from "./state.js";

export function moveNext(wordsArr, element) {
  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, return from the function.
  if (getIndexOfWord() >= getlastCsvJsonResult().length) {
    return;
  }
}
