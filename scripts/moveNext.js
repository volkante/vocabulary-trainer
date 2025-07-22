"use strict";

import { getIndexOfDisplayedWord, setIndexOfDisplayedWord } from "./state.js";
import { createOutputsChild } from "./utils.js";

export function moveNext(wordInfosArr, element) {
  setIndexOfDisplayedWord(getIndexOfDisplayedWord() + 1);
  createOutputsChild(wordInfosArr, element);
}
