"use script";

let indexOfDisplayedWord = 0;

export function moveNext(arr, element) {
  element.replaceChildren();
  const wordElement = document.createElement("li");
  wordElement.textContent = arr[indexOfDisplayedWord]["Bedeutung"];
  element.appendChild(wordElement);
  indexOfDisplayedWord++;
}
