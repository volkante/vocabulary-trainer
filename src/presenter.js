export function setElementTextContent(element, text) {
  element.textContent = text;
}

export function clearElement(element) {
  element.replaceChildren();
}

/* *** Reset output *** */

export function resetOutput(outputList, wordIndexElement, outputTitle) {
  // When a new file is loaded, clear the output-list field
  clearElement(outputList);
  // When a new file is loaded set word index display to 0.
  setElementTextContent(wordIndexElement, 0);
  // Reset output title to default
  setElementTextContent(outputTitle, "Output");
}

/* *** Create and Display a start text in output area *** */
export function createAndShowStartText(outputElement) {
  const startText = document.createElement("li");
  setElementTextContent(startText, "💡 Click Next Button to start");
  outputElement.appendChild(startText);
}

/* *** Output children creation *** */

// Create and fill the output ul's child(each word info as a li element)
export function createOutputsChild(element, currWordInfo) {
  // Reset the previous word info (li element) each time this function's called
  clearElement(element);
  let wordElement;

  // If the content is empty, add "no" to title and show it
  if (!currWordInfo) {
    wordElement = document.createElement("li");
    setElementTextContent(wordElement, "no information");
    element.appendChild(wordElement);
    // If revealed info is a link, make it anchor element
  } else if (currWordInfo.startsWith("https")) {
    wordElement = document.createElement("li");
    createLink(currWordInfo, wordElement);
    element.appendChild(wordElement);
    // If revealed info is not a link but a plain text:
  } else {
    // If the text has a new line (e.g. more than one example), place one under the other in the output
    if (currWordInfo.includes("\n")) {
      createNewLines(element, currWordInfo);
      // If text does not have a new line (e.g. just one example), write it simply to the list element
    } else {
      wordElement = document.createElement("li");
      setElementTextContent(wordElement, currWordInfo);
      element.appendChild(wordElement);
    }
  }
}

// Add anchor tag into list element if word information starts with http
function createLink(content, wordElement) {
  const link = document.createElement("a");
  link.href = content;
  setElementTextContent(link, content);
  link.target = "_blank";
  wordElement.appendChild(link);
}

// If the text has a new line (e.g. more than one example), place one under the other in the output
// I.e. Create new lines
function createNewLines(element, content) {
  const examplesArr = content.split("\n");
  const exampleElements = examplesArr.map((item) => {
    const exampleElement = document.createElement("li");
    setElementTextContent(exampleElement, item);
    return exampleElement;
  });
  for (let i = 0; i < exampleElements.length; i++) {
    const liElement = exampleElements[i];
    element.appendChild(liElement);
  }
}
