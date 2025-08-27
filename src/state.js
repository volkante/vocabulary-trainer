"use strict";

let lastCsvJsonResult = null;
let indexOfDisplayedWordInfo = -1;
let indexOfWord = 0;

export function getlastCsvJsonResult() {
  return lastCsvJsonResult;
}

export function setLastCsvJsonResult(val) {
  lastCsvJsonResult = val;
}

export function getIndexOfDisplayedWordInfo() {
  return indexOfDisplayedWordInfo;
}

export function setIndexOfDisplayedWordInfo(indexNum) {
  indexOfDisplayedWordInfo = indexNum;
}

export function getIndexOfWord() {
  return indexOfWord;
}

export function setIndexOfWord(indexNum) {
  indexOfWord = indexNum;
}
