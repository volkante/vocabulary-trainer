"use strict";

import { getIndexOfDisplayedWord, setIndexOfDisplayedWord } from "./state.js";
import { createOutputsChild, changeOutputTitle } from "./utils.js";
import { outputTitle } from "./domElements.js";

export function moveNext(wordInfosArr, element) {
  setIndexOfDisplayedWord(getIndexOfDisplayedWord() + 1);
  changeOutputTitle(outputTitle, getIndexOfDisplayedWord());
  createOutputsChild(wordInfosArr, element);
}
