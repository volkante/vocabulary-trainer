"use strict";

import { getIndexOfDisplayedWord, setIndexOfDisplayedWord } from "./state.js";
import { createOutputsChild } from "./utils.js";

export function moveBack(wordInfosArr, element) {
  setIndexOfDisplayedWord(
    getIndexOfDisplayedWord() > 0 ? getIndexOfDisplayedWord() - 1 : 0
  );
  createOutputsChild(wordInfosArr, element);
}
