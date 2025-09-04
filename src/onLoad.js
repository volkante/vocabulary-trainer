import Papa from "papaparse";
import { totalWordlistLength, wordIndexElement } from "./domElements.js";
import {
  getlastCsvJsonResult,
  setLastCsvJsonResult,
  setIndexOfDisplayedWordInfo,
  setIndexOfWord,
} from "./state.js";
import { convertObjectsToArr, shuffle, createStartText } from "./utils.js";
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
  // Show output wordlist length on screen
  totalWordlistLength.textContent = shuffledJsonResult.length;

  // Convert shuffled array of objects into an array
  let wordInfosArr = convertObjectsToArr(shuffledJsonResult);
  // Set result to shuffled array
  setLastCsvJsonResult(wordInfosArr);
  console.log(getlastCsvJsonResult());

  // When a new file is loaded, set Index of Displayed Word information to -1
  setIndexOfDisplayedWordInfo(-1);
  // When a new file is loaded, clear the output-list field
  outputList.replaceChildren();
  // When a new file is loaded, set displayed word Index to 0
  setIndexOfWord(0);
  // When a new file is loaded, create and display the start text in output element.
  createStartText(outputList);
  // When a new file is loaded set word index display to 0.
  wordIndexElement.textContent = 0;
}
