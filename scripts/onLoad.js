import { getlastCsvJsonResult, setLastCsvJsonResult } from "./state.js";
import { shuffle } from "./shuffle.js";

export function onLoad(e) {
  const csvText = e.target.result;
  // Use CSVJSON program to get json result
  let jsonResult = CSVJSON.csv2json(csvText, { parseNumbers: true });
  // Shuffle the array of objects by using shuffle function
  let shuffledJsonResult = shuffle(jsonResult);
  // Set result to shuffled array
  setLastCsvJsonResult(shuffledJsonResult);
  console.log(getlastCsvJsonResult());
}
