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
    const values = Object.values(arr[i]);
    for (let j = 0; j < 4; j++) {
      if (values[j] === "") {
        values[j] = `keine info`;
      }
      wordInfosArr.push(values[j]);
    }
  }
  return wordInfosArr;
}

/* function createPlaceHolderForEmptyWordInfo (val) {
  val === "" ? `keine ${}`
} */
