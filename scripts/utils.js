"use script";

// Correct each turkish word in the array
export function getArrayFromCorrectedInput(inputVal) {
  return inputVal.split("\n").map((element) => {
    return element.trim();
  });
}

export function convertObjectsToArr(arr) {
  const wordInfosArr = [];
  for (let i = 0; i < arr.length; i++) {
    const entries = Object.entries(arr[i]);
    for (let j = 0; j < 4; j++) {
      let value = entries[j][1];
      let key = entries[j][0];
      wordInfosArr.push(wordInfoCreate(key, value));
    }
  }
  return wordInfosArr;
}

function wordInfoCreate(key, val) {
  let wordInfo;
  if (val === "") {
    wordInfo = `keine ${key}`;
  } else {
    wordInfo = val;
  }
  return wordInfo;
}
