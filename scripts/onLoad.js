"use strict";

import { totalWordlistLength } from "./domElements.js";
import { getlastCsvJsonResult, setLastCsvJsonResult } from "./state.js";
import { convertObjectsToArr, shuffle } from "./utils.js";

export function onLoad(e) {
  const csvText = e.target.result;
  // Use CSVJSON program to get json result
  let jsonResult = CSVJSON.csv2json(csvText, { parseNumbers: true });
  console.log(jsonResult);

  // Shuffle the array of objects by using shuffle function
  let shuffledJsonResult = shuffle(jsonResult);
  // Show output wordlist length on screen
  totalWordlistLength.textContent = shuffledJsonResult.length;
  // Convert shuffled array of objects into an array
  let wordInfosArr = convertObjectsToArr(shuffledJsonResult);
  // Set result to shuffled array
  setLastCsvJsonResult(wordInfosArr);
  console.log(getlastCsvJsonResult());
}
