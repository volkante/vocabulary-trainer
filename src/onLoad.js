import Papa from "papaparse";
import { totalWordlistLength, wordIndexElement } from "./domElements.js";
import {
  getlastCsvJsonResult,
  setLastCsvJsonResult,
  setIndexOfWordObj,
} from "./state.js";
import { shuffle, createStartText } from "./utils.js";
import { outputList } from "./domElements.js";

export function onLoad(e) {
  const csvText = e.target.result;
  // Use Papa.parse program to get json result
  let jsonResult = Papa.parse(csvText, {
    header: true, // use first row as column names
    skipEmptyLines: true,
  });

  const jsonResultShallowCopy = [...jsonResult.data];
  // Shuffle the array of objects by using shuffle function
  const shuffledJsonResult = shuffle(jsonResultShallowCopy);
  console.log(shuffledJsonResult);
  // Show output wordlist length on screen
  totalWordlistLength.textContent = shuffledJsonResult.length;

  //
  let wordInfosArr = [...shuffledJsonResult];
  // Set result to shuffled array
  setLastCsvJsonResult(wordInfosArr);

  // When a new file is loaded, set Index of Word Object to -1
  setIndexOfWordObj(0);
  // When a new file is loaded, clear the output-list field
  outputList.replaceChildren();
  // When a new file is loaded, create and display the start text in output element.
  createStartText(outputList);
  // When a new file is loaded set word index display to 0.
  wordIndexElement.textContent = 0;
}
