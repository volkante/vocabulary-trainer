"use strict";

import {
  getIndexOfDisplayedWordInfo,
  setIndexOfDisplayedWordInfo,
} from "./state.js";
import { createOutputsChild, changeOutputTitle } from "./utils.js";
import { outputTitle } from "./domElements.js";

export function moveBack(wordInfosArr, element) {
  // Prevent index of displayed word from going below 0: If index is 0, return from the function.
  if (getIndexOfDisplayedWordInfo() > 0) {
    setIndexOfDisplayedWordInfo(getIndexOfDisplayedWordInfo() - 1);
  } else {
    return;
  }

  changeOutputTitle(outputTitle, getIndexOfDisplayedWordInfo());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWordInfo());
  console.log(getIndexOfDisplayedWordInfo());
}
