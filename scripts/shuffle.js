"use strict";

export function shuffle(turkishWordsArr) {
  // Check if turkishWordsArr is an array. Throw error when not.
  if (!Array.isArray(turkishWordsArr)) throw new Error("Expected Array");
  // Check if more than one word is given as input
  if (turkishWordsArr.length <= 1)
    throw new Error("Expected more than one word");
  // Shuffle the turkishWordsArray
  for (let i = turkishWordsArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [turkishWordsArr[i], turkishWordsArr[j]] = [
      turkishWordsArr[j],
      turkishWordsArr[i],
    ];
  }
  return turkishWordsArr;
}
