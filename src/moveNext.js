import {
  outputTitle,
  wordIndexElement,
  totalWordlistLength,
} from "./domElements.js";
import {
  getIndexOfWordObj,
  setIndexOfWordObj,
  getWordInfoIndex,
  setWordInfoIndex,
  getlastCsvJsonResult,
  setLastCsvJsonResult,
  getRevisitList,
  clearRevisitList,
} from "./state.js";

import { setElementTextContent, createOutputsChild } from "./presenter.js";

export function moveNext(element) {
  const wordObjects = getlastCsvJsonResult();

  if (!wordObjects || wordObjects.length === 0) {
    alert("📚 Please upload a CSV file or paste a sheet URL first!");
    return;
  }

  // Get the number of properties(word information titles) from the first word object to determine when to change output title
  let objectPropertyLength = Object.keys(wordObjects[0]).length;

  // Increase word information index by 1 to be able to move to new title and word information
  setWordInfoIndex(getWordInfoIndex() + 1);

  // If word informations are finished, move to new word object and set the word information index to 0
  if (getWordInfoIndex() === objectPropertyLength) {
    const nextIndexOfWordObj = getIndexOfWordObj() + 1;
    setIndexOfWordObj(nextIndexOfWordObj);
    setWordInfoIndex(0);
  }

  // Prevent index of displayed word from exceeding the wordinfos array: If index is at the last, check for revisit list
  if (getIndexOfWordObj() >= wordObjects.length) {
    const revisit = getRevisitList();
    if (revisit.length > 0) {
      // Append revisit list to the main list in addition order
      const updatedList = [...wordObjects, ...revisit];
      setLastCsvJsonResult(updatedList);
      clearRevisitList();
      // Update the total word count display
      setElementTextContent(totalWordlistLength, updatedList.length);

      // Continue without resetting index, as the list has grown
    } else {
      alert("🎉 Word list is finished. Great job!");
      return;
    }
  }

  // Get the current word objects again in case it was updated with revisit list
  const currentWordObjects = getlastCsvJsonResult();

  /*  Word Index Header */
  setElementTextContent(wordIndexElement, getIndexOfWordObj() + 1);

  // Get all wordTitles in an array
  const wordTitles = Object.keys(currentWordObjects[getIndexOfWordObj()]);
  // Store the current title
  let currWordTitle = wordTitles[getWordInfoIndex()];
  // Prefix "new" emoji for the first field of each word object
  if (getWordInfoIndex() === 0) {
    currWordTitle = "✨ " + currWordTitle;
  }
  // Change output title
  setElementTextContent(outputTitle, currWordTitle);

  // Get word informations (definitions, examples e.g.)
  const wordFieldValues = Object.values(
    currentWordObjects[getIndexOfWordObj()]
  );
  // Store each word information in a variable by means of word information index that increases by each click
  let currWordInfo = wordFieldValues[getWordInfoIndex()];
  // Create and display word information on output
  createOutputsChild(element, currWordInfo);
}
