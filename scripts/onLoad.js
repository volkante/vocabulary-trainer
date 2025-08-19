"use strict";

import { totalWordlistLength, wordIndexElement } from "./domElements.js";
import {
  getlastCsvJsonResult,
  setLastCsvJsonResult,
  setIndexOfWord,
  getIndexOfWord,
} from "./state.js";
import { shuffle, createStartText } from "./utils.js";
import { outputList } from "./domElements.js";

export function onLoad(e) {
  const csvText = e.target.result;
  // Use CSVJSON program to get json result
  let jsonResult = CSVJSON.csv2json(csvText, { parseNumbers: true });

  const jsonResultShallowCopy = [...jsonResult];
  // Shuffle the array of objects by using shuffle function
  const shuffledJsonResult = shuffle(jsonResultShallowCopy);
  // Show output wordlist length on screen
  totalWordlistLength.textContent = shuffledJsonResult.length;

  // Set result to shuffled array
  setLastCsvJsonResult(shuffledJsonResult);
  console.log(getlastCsvJsonResult());
  console.log(getIndexOfWord());
  const obj = getlastCsvJsonResult()[getIndexOfWord()];
  for (const property in obj) {
    console.log(property, obj[property]);
  }
  // When a new file is loaded, clear the output-list field
  outputList.replaceChildren();
  // When a new file is loaded, set displayed word Index to 0
  setIndexOfWord(0);
  // When a new file is loaded, create and display the start text in output element.
  createStartText(outputList);
  // When a new file is loaded set word index display to 0.
  wordIndexElement.textContent = 0;
}
