"use strict";

import { getIndexOfDisplayedWord, setIndexOfDisplayedWord } from "./state.js";
import { createOutputsChild, changeOutputTitle } from "./utils.js";
import { outputTitle } from "./domElements.js";

export function moveBack(wordInfosArr, element) {
  // Prevent index of displayed word from going below 0
  setIndexOfDisplayedWord(
    getIndexOfDisplayedWord() > 0 ? getIndexOfDisplayedWord() - 1 : 0
  );
  changeOutputTitle(outputTitle, getIndexOfDisplayedWord());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWord());
}
