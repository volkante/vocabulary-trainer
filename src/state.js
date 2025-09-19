"use strict";

let lastCsvJsonResult = null;
let indexOfWordObj = 0;
let wordInfoIndex = -1;
let revisitList = [];

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

export function getRevisitList() {
  return revisitList;
}

export function addToRevisitList(obj) {
  revisitList.push(obj);
}

export function clearRevisitList() {
  revisitList = [];
}
