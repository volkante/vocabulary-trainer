"use strict";

let lastCsvJsonResult = null;
let indexOfDisplayedWordInfo = -1;

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
