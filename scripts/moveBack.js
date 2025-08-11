"use strict";

import { getIndexOfDisplayedWord, setIndexOfDisplayedWord } from "./state.js";
import { createOutputsChild, changeOutputTitle } from "./utils.js";
import { outputTitle } from "./domElements.js";

export function moveBack(wordInfosArr, element) {
  // Prevent index of displayed word from going below 0: If index is 0, return from the function.
  if (getIndexOfDisplayedWord() > 0) {
    setIndexOfDisplayedWord(getIndexOfDisplayedWord() - 1);
  } else {
    return;
  }

  changeOutputTitle(outputTitle, getIndexOfDisplayedWord());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWord());
}
