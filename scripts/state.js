"use strict";

let lastCsvJsonResult = null;
let indexOfWord = 0;
let indexOfWordInfoField = 0;

export function getlastCsvJsonResult() {
  return lastCsvJsonResult;
}

export function setLastCsvJsonResult(val) {
  lastCsvJsonResult = val;
}

export function getIndexOfWord() {
  return indexOfWord;
}

export function setIndexOfWord(indexNum) {
  indexOfWord = indexNum;
}

export function getIndexOfWordInfoField() {
  return indexOfWordInfoField;
}

export function setIndexOfWordInfoField(indexNum) {
  indexOfWordInfoField = indexNum;
}
