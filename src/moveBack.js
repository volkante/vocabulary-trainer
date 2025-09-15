import {
  getIndexOfWordObj,
  setWordInfoIndex,
  getWordInfoIndex,
} from "./state.js";
import {
  createOutputsChild,
  changeOutputTitle,
  decreaseWordIndex,
} from "./utils.js";
import { outputTitle, wordIndexElement } from "./domElements.js";

export function moveBack(wordObjects, element) {
  // Prevent index of displayed word from going below 0: If index is 0, return from the function.
  if (getIndexOfWordObj() >= 0) {
    setWordInfoIndex(getWordInfoIndex() - 1);

    // Aşağsı yapılacak //

    // Decrease word index and display it
    decreaseWordIndex(getIndexOfWord(), getIndexOfDisplayedWordInfo());
    wordIndexElement.textContent = getIndexOfWord();
  } else {
    return;
  }

  changeOutputTitle(outputTitle, getIndexOfDisplayedWordInfo());
  createOutputsChild(wordInfosArr, element, getIndexOfDisplayedWordInfo());
}
