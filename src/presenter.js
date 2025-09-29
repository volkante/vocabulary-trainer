export function setElementTextContent(element, text) {
  element.textContent = text;
}

export function clearElement(element) {
  element.replaceChildren();
}

/* *** Create and Display a start text in output area *** */
export function createAndShowStartText(outputElement) {
  const startText = document.createElement("li");
  setElementTextContent(startText, "💡 Click Next Button to start");
  outputElement.appendChild(startText);
}
