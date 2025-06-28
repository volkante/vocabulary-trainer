"use script";
import { outputList } from "./domElements.js";

let indexOfDisplayedWord = 0;

export function moveNext(arr, element) {
  element.replaceChildren();
  const wordElement = document.createElement("li");
  wordElement.textContent = arr[indexOfDisplayedWord];
  element.appendChild(wordElement);
  indexOfDisplayedWord++;
}
