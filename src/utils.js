import { setElementTextContent, clearElement } from "./presenter";

/* *** Word Shuffle *** */

// Shuffle word informations
export function shuffle(arr) {
  // Check if arr is an array. Throw error when not.
  if (!Array.isArray(arr)) throw new Error("Expected Array");
  // Check if more than one word is given as input
  if (arr.length <= 1) throw new Error("Expected more than one word");
  // Shuffle the array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* *** Output children creation *** */

// Create and fill the output ul's child(each word info as a li element)
export function createOutputsChild(element, currWordInfo) {
  // Reset the previous word info (li element) each time this function's called
  clearElement(element);
  let wordElement;

  // If the content is empty, add "no" to title and show it
  if (!currWordInfo) {
    wordElement = document.createElement("li");
    setElementTextContent(wordElement, "no information");
    element.appendChild(wordElement);
    // If revealed info is a link, make it anchor element
  } else if (currWordInfo.startsWith("https")) {
    wordElement = document.createElement("li");
    createLink(currWordInfo, wordElement);
    element.appendChild(wordElement);
    // If revealed info is not a link but a plain text:
  } else {
    // If the text has a new line (e.g. more than one example), place one under the other in the output
    if (currWordInfo.includes("\n")) {
      createNewLines(element, currWordInfo);
      // If text does not have a new line (e.g. just one example), write it simply to the list element
    } else {
      wordElement = document.createElement("li");
      setElementTextContent(wordElement, currWordInfo);
      element.appendChild(wordElement);
    }
  }
}

// Add anchor tag into list element if word information starts with http
export function createLink(content, wordElement) {
  const link = document.createElement("a");
  link.href = content;
  setElementTextContent(link, content);
  link.target = "_blank";
  wordElement.appendChild(link);
}

// If the text has a new line (e.g. more than one example), place one under the other in the output
// I.e. Create new lines
export function createNewLines(element, content) {
  const examplesArr = content.split("\n");
  const exampleElements = examplesArr.map((item) => {
    const exampleElement = document.createElement("li");
    setElementTextContent(exampleElement, item);
    return exampleElement;
  });
  for (let i = 0; i < exampleElements.length; i++) {
    const liElement = exampleElements[i];
    element.appendChild(liElement);
  }
}
