"use strict";

/* *** Objects to Array Conversion *** */

// Convert json into a one dimensional array
export function convertObjectsToArr(arr) {
  const wordInfosArr = [];
  // Iterate over objects of array
  for (let i = 0; i < arr.length; i++) {
    // Create entries array which includes another array of the key and value of each word info
    const entries = Object.entries(arr[i]);
    // Iterate over entries array
    for (let j = 0; j < 4; j++) {
      let value = entries[j][1];
      let key = entries[j][0];
      // Push word info if it exists, push "keine + key name" if no word info exists
      wordInfosArr.push(wordInfoCreate(key, value));
    }
  }
  return wordInfosArr;
}

// When the word information is empty, create a string with "keine"
function wordInfoCreate(key, val) {
  const wordInfo = val === "" ? `keine ${key}` : val;
  return wordInfo;
}

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
export function createOutputsChild(
  wordInfosArr,
  element,
  indexOfDisplayedWordInfo
) {
  // Reset the previous word info (li element) each time this function's called
  element.replaceChildren();
  let wordElement;
  const content = wordInfosArr[indexOfDisplayedWordInfo];
  // If revealed info is a link, make it anchor element
  if (content.startsWith("https")) {
    wordElement = document.createElement("li");
    createLink(content, wordElement);
    element.appendChild(wordElement);
    // If revealed info is not a link but a plain text:
  } else {
    // If the text has a new line (e.g. more than one example), place one under the other in the output
    if (content.includes("\n")) {
      createNewLines(element, content);
      // If text does not have a new line (e.g. just one example), write it simply to the list element
    } else {
      wordElement = document.createElement("li");
      wordElement.textContent = content;
      element.appendChild(wordElement);
    }
  }
}

// Add anchor tag into list element if word information starts with http
function createLink(content, wordElement) {
  const link = document.createElement("a");
  link.href = content;
  link.textContent = content;
  link.target = "_blank";
  wordElement.appendChild(link);
}

// If the text has a new line (e.g. more than one example), place one under the other in the output
// I.e. Create new lines
function createNewLines(element, content) {
  const examplesArr = content.split("\n");
  const exampleElements = examplesArr.map((item) => {
    const exampleElement = document.createElement("li");
    exampleElement.textContent = item;
    return exampleElement;
  });
  for (let i = 0; i < exampleElements.length; i++) {
    const liElement = exampleElements[i];
    element.appendChild(liElement);
  }
}

/* *** Output Title Change *** */

// Change Output title by showed information type between "Meaning", "Word", "Source" and "Example"
export function changeOutputTitle(outputTitle, indexOfDisplayedWordInfo) {
  let content;
  switch (indexOfDisplayedWordInfo % 4) {
    case 0:
      content = "✨ Meaning";
      break;
    case 1:
      content = "Word";
      break;
    case 2:
      content = "Source";
      break;
    case 3:
      content = "Example/Remark";
      break;
    default:
      break;
  }
  outputTitle.textContent = content;
}

/* *** Create and Display a start text in output area *** */

export function createStartText(outputElement) {
  const startText = document.createElement("li");
  startText.textContent = "Click Next Button to start";
  outputElement.appendChild(startText);
}

/* ***  *** */
