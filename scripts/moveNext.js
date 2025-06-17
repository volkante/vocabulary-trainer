"use script";
import { outputList } from "./domElements.js";

let indexOfDisplayedWord = 0;

export function moveNext(turkishWordsArr) {
  outputList.replaceChildren();
  const wordElement = document.createElement("li");
  wordElement.textContent = turkishWordsArr[indexOfDisplayedWord];
  outputList.appendChild(wordElement);
  indexOfDisplayedWord++;
}
