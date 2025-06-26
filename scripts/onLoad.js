let json;
export function onLoad(e) {
  console.log(e);
  const csvText = e.target.result;
  json = CSVJSON.csv2json(csvText, { parseNumbers: true });
  console.log("Dönüştürülmüş JSON:", json);
}
