"use script";

// Correct each turkish word in the array
export function getArrayFromCorrectedInput(inputVal) {
  return inputVal.split("\n").map((element) => {
    return element.trim();
  });
}

export function convertObjectsToArr(arr) {
  const wordInfosArr = [];
  // Iterate over objects of array
  console.log(Object.entries(arr[0]));
  for (let i = 0; i < arr.length; i++) {
    // Create entries array which includes another array of the key and value of each word info
    const entries = Object.entries(arr[i]);
    const turkishMeaning = entries[1];
    entries[1] = entries[0];
    entries[0] = turkishMeaning;
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

/* function swapGermanWordTurkishMeaning (arr) {
    const germanWord = arr[0];
    arr[1] = arr[0];
    arr[0] = germanWord;
} */
