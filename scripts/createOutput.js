import { outputList } from "./domElements.js";

export function createOutput(turkishWordsArr) {
  for (let i = 0; i < turkishWordsArr.length; i++) {
    // Create a list element for each word
    const turkishWordElement = document.createElement("li");
    // Get each list element's content from already shuffled turkish words array
    turkishWordElement.textContent = turkishWordsArr[i];
    // Add list element to its parent to display it
    outputList.appendChild(turkishWordElement);
  }
  console.log(turkishWordsArr);
}
