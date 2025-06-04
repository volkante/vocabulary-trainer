"use strict";

const textArea = document.querySelector("#vocabulary-input");
const sendButton = document.querySelector(".send-button");

sendButton.addEventListener("click", () => {
  const textAreaValue = textArea.value;
  console.log(textAreaValue);
});
