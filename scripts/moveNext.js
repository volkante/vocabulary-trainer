"use script";

let indexOfDisplayedWord = 0;

export function moveNext(arr, element) {
  element.replaceChildren();
  const wordElement = document.createElement("li");
  const content = arr[indexOfDisplayedWord];
  if (content.startsWith("https")) {
    const link = document.createElement("a");
    link.href = content;
    link.textContent = content;
    wordElement.appendChild(link);
  } else {
    wordElement.textContent = content;
  }
  element.appendChild(wordElement);
  indexOfDisplayedWord++;
}
