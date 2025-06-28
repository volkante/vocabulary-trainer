"use script";

let indexOfDisplayedWord = 0;

export function moveNext(arr, element) {
  element.replaceChildren();
  const wordElement = document.createElement("li");
  console.log(arr);
  console.log(indexOfDisplayedWord);
  wordElement.textContent = arr[indexOfDisplayedWord];
  element.appendChild(wordElement);
  indexOfDisplayedWord++;
}
