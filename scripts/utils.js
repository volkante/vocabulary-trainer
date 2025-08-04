"use strict";
import { getIndexOfDisplayedWord } from "./state.js";

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

// Create and fill the output ul's child(each word info as a li element)
export function createOutputsChild(wordInfosArr, element) {
  // Reset the previous word info (li element)
  element.replaceChildren();
  const wordElement = document.createElement("li");
  const content = wordInfosArr[getIndexOfDisplayedWord()];
  // If revealed info is a link, make it anchor element
  if (content.startsWith("https")) {
    createLink(content, wordElement);
  } else {
    wordElement.textContent = content;
  }
  element.appendChild(wordElement);
}

// Add anchor tag into list element if word information starts with http
function createLink(content, wordElement) {
  const link = document.createElement("a");
  link.href = content;
  link.textContent = content;
  link.target = "_blank";
  wordElement.appendChild(link);
}

// When the word information is empty, create a string with "keine"
function wordInfoCreate(key, val) {
  const wordInfo = val === "" ? `keine ${key}` : val;
  return wordInfo;
}
