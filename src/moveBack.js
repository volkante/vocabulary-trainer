import {
  getIndexOfWordObj,
  setIndexOfWordObj,
  setWordInfoIndex,
  getWordInfoIndex,
  getlastCsvJsonResult,
} from "./state.js";
import { outputTitle, wordIndexElement } from "./domElements.js";
import { setElementTextContent, createOutputsChild } from "./presenter.js";

export function moveBack(element) {
  const wordObjects = getlastCsvJsonResult();

  if (!wordObjects || wordObjects.length === 0) {
    alert("📚 Please upload a CSV file or paste a sheet URL first!");
    return;
  }

  // Get the number of properties (word information titles) from the first word object
  const objectPropertyLength = Object.keys(wordObjects[0]).length;

  // Prevent going back if at the start (indexOfWordObj is 0 and wordInfoIndex is 0 or less)
  if (getIndexOfWordObj() === 0 && getWordInfoIndex() <= 0) {
    alert("You are at the beginning of the word list.");
    return;
  }

  // Decrease word information index by 1
  setWordInfoIndex(getWordInfoIndex() - 1);

  // If word information index goes below 0, move to the previous word object and set to the last information index
  if (getWordInfoIndex() < 0) {
    const previousIndexOfWordObj = getIndexOfWordObj() - 1;
    setIndexOfWordObj(previousIndexOfWordObj);
    setWordInfoIndex(objectPropertyLength - 1);
  }

  // Update word index header (display as 1-based index)
  setElementTextContent(wordIndexElement, getIndexOfWordObj() + 1);

  // Get all word titles in an array
  const wordTitles = Object.keys(wordObjects[getIndexOfWordObj()]);
  // Store the current title (allow modification)
  let currWordTitle = wordTitles[getWordInfoIndex()];
  // Prefix "new" emoji for the first field of each word object
  if (getWordInfoIndex() === 0) {
    currWordTitle = "✨ " + currWordTitle;
  }
  // Change output title
  setElementTextContent(outputTitle, currWordTitle);

  // Get word informations (definitions, examples, etc.)
  const wordFieldValues = Object.values(wordObjects[getIndexOfWordObj()]);
  // Store the current word information
  const currWordInfo = wordFieldValues[getWordInfoIndex()];
  // Create and display word information on output
  createOutputsChild(element, currWordInfo);
}
