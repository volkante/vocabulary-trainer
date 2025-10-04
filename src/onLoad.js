import {
  totalWordlistLength,
  wordIndexElement,
  outputTitle,
} from "./domElements.js";
import {
  getlastCsvJsonResult,
  setLastCsvJsonResult,
  setIndexOfWordObj,
  setWordInfoIndex,
  clearRevisitList,
} from "./state.js";
import { parseCsvToArray, shuffle } from "./utils.js";
import { outputList } from "./domElements.js";
import {
  setElementTextContent,
  createAndShowStartText,
  resetOutput,
} from "./presenter.js";

export function onLoad(e) {
  const csvText = e.target.result;
  // Use Papa.parse program to get json result
  const result = parseCsvToArray(csvText);
  // Shuffle the array of objects by using shuffle function
  const shuffledJsonResult = shuffle(result);
  console.log("shuffledJsonResult", shuffledJsonResult);
  // Show output wordlist length on screen
  setElementTextContent(totalWordlistLength, shuffledJsonResult.length);

  //
  let wordObjects = [...shuffledJsonResult];
  // Set result to shuffled array
  setLastCsvJsonResult(wordObjects);

  // When a new file is loaded, set Index of Word Object to 0
  setIndexOfWordObj(0);
  // Reset word info index so first Next shows the first field
  setWordInfoIndex(-1);
  // Clear revisit list to avoid stale appended items
  clearRevisitList();

  resetOutput(outputList, wordIndexElement, outputTitle);
  // When a new file is loaded, create and display the start text in output element.
  createAndShowStartText(outputList);
}
