"use script";

let indexOfDisplayedWord = 0;

export function moveNext(arr, element) {
  element.replaceChildren();
  const wordElement = document.createElement("li");
  wordElement.textContent =
    typeof arr[indexOfDisplayedWord] === "object"
      ? arr[indexOfDisplayedWord]["Bedeutung"]
      : arr[indexOfDisplayedWord];
  element.appendChild(wordElement);
  indexOfDisplayedWord++;
}
