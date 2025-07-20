"use strict";

// Correct each turkish word in the array
export function getArrayFromCorrectedInput(inputVal) {
  return inputVal.split("\n").map((element) => {
    return element.trim();
  });
}

export function convertObjectsToArr(arr) {
  const wordInfosArr = [];
  // Iterate over objects of array
  for (let i = 0; i < arr.length; i++) {
    // Create entries array which includes another array of the key and value of each word info
    const entries = Object.entries(arr[i]);
    // Replace first entry with Turkish meaning and second with German word
    swapGermanWordTurkishMeaning(entries);
    // Iterate over entries array
    for (let j = 0; j < 4; j++) {
      let value = entries[j][1];
      let key = entries[j][0];
      // Push word info if it exists, push "keine + key name" if no word info exists
      wordInfosArr.push(wordInfoCreate(key, value));
    }
  }
  return wordInfosArr;
}

function wordInfoCreate(key, val) {
  const wordInfo = val === "" ? `keine ${key}` : val;
  return wordInfo;
}

function swapGermanWordTurkishMeaning(entriesArr) {
  const turkishMeaning = entriesArr[1];
  entriesArr[1] = entriesArr[0];
  entriesArr[0] = turkishMeaning;
}
