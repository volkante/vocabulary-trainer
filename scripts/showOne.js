"use script";

import { outputList } from "./domElements.js";

export function showOne(turkishWordsArr) {
  outputList.replaceChildren();
  let wordElement = document.createElement("li");
  wordElement.textContent = turkishWordsArr[0];
  outputList.appendChild(wordElement);
}
