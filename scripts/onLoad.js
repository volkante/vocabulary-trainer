import { csvOutput } from "./domElements.js";

let jsonResult;
export function onLoad(e) {
  console.log(e);
  const csvText = e.target.result;
  jsonResult = CSVJSON.csv2json(csvText, { parseNumbers: true });
  console.log("Dönüştürülmüş JSON:", jsonResult);
  csvOutput.textContent = jsonResult[0]["Satz/Wort"];
}
