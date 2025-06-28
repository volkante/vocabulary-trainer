import { csvOutput } from "./domElements.js";
import { getlastCsvJsonResult, setLastCsvJsonResult } from "./state.js";

export function onLoad(e) {
  console.log(e);
  const csvText = e.target.result;
  let jsonResult = CSVJSON.csv2json(csvText, { parseNumbers: true });
  console.log("Dönüştürülmüş JSON:", jsonResult);
  csvOutput.textContent = jsonResult[0]["Satz/Wort"];
  setLastCsvJsonResult(jsonResult);
  return getlastCsvJsonResult();
}
