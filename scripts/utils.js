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
      let wordInfo;
      if (entries[j][1] === "") {
        wordInfo = `keine ${entries[j][0]}`;
      } else {
        wordInfo = entries[j][1];
      }
      wordInfosArr.push(wordInfo);
    }
  }
  return wordInfosArr;
}

/* function createPlaceHolderForEmptyWordInfo (val) {
  val === "" ? `keine ${}`
} */
