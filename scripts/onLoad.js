import { getlastCsvJsonResult, setLastCsvJsonResult } from "./state.js";

export function onLoad(e) {
  const csvText = e.target.result;
  let jsonResult = CSVJSON.csv2json(csvText, { parseNumbers: true });
  setLastCsvJsonResult(jsonResult);
  console.log(jsonResult);
}
