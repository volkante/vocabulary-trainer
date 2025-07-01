"use script";

let indexOfDisplayedWord = 0;

export function moveNext(arr, element) {
  const wordsArr = [];

  console.log(Object.values(arr[0]));
  /* for(let i = 0; i < arr.length; i++){
    arr[0].entries();
  } */

  element.replaceChildren();
  const wordElement = document.createElement("li");
  wordElement.textContent = arr[indexOfDisplayedWord]["Bedeutung"];
  element.appendChild(wordElement);
  indexOfDisplayedWord++;
}
