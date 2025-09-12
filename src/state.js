"use strict";

let lastCsvJsonResult = null;
let indexOfWordObj = 0;
let wordInfoIndex = -1;

export function getlastCsvJsonResult() {
  return lastCsvJsonResult;
}

export function setLastCsvJsonResult(val) {
  lastCsvJsonResult = val;
}

export function getIndexOfWordObj() {
  return indexOfWordObj;
}

export function setIndexOfWordObj(indexNum) {
  indexOfWordObj = indexNum;
}

export function getWordInfoIndex() {
  return wordInfoIndex;
}

export function setWordInfoIndex(WordInfoIndexNum) {
  wordInfoIndex = WordInfoIndexNum;
}
