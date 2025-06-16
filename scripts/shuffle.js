"use strict";

export function shuffle(arr) {
  // Check if an array is given as an argument, throw error when not.
  if (!Array.isArray(arr)) throw new Error("Expected Array");
  // Check if more than one word is given as input
  if (arr.length <= 1) throw new Error("Expected more than one word");
  // Shuffle the array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
