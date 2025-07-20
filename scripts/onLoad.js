import { getlastCsvJsonResult, setLastCsvJsonResult } from "./state.js";
import { shuffle } from "./shuffle.js";
import { convertObjectsToArr } from "./utils.js";

export function onLoad(e) {
  const csvText = e.target.result;
  // Use CSVJSON program to get json result
  let jsonResult = CSVJSON.csv2json(csvText, { parseNumbers: true });
  // Shuffle the array of objects by using shuffle function
  let shuffledJsonResult = shuffle(jsonResult);
  // Convert shuffled array of objects into an array
  let wordInfosArr = convertObjectsToArr(shuffledJsonResult);
  // Set result to shuffled array
  setLastCsvJsonResult(wordInfosArr);

  //console.log(getlastCsvJsonResult());
}
