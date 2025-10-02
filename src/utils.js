import Papa from "papaparse";

/* *** Word Shuffle *** */

// Shuffle word informations
export function shuffle(arr) {
  // Check if arr is an array. Throw error when not.
  if (!Array.isArray(arr)) throw new Error("Expected Array");
  // Check if more than one word is given as input
  if (arr.length <= 1) throw new Error("Expected more than one word");
  // Create a copy
  const copy = arr.slice();
  // Shuffle the copy
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* *** Parse csv to array utility *** */

export function parseCsvToArray(csvText) {
  const result = Papa.parse(csvText, {
    header: true, // use first row as column names
    skipEmptyLines: true,
  });
  if (result.errors && result.errors.length) {
    throw new Error(result.errors.map((e) => e.message).join(", "));
  }
  return result.data;
}

/* *** Clear api link *** */

// Format api address to be able to get csv link from google sheets according to google sheets rules
export function clearApiLink(unformattedApiLink) {
  const charIndexToRemoveUnnecessaryPart = unformattedApiLink.indexOf("edit");
  const clearApiLink = unformattedApiLink
    .slice(0, charIndexToRemoveUnnecessaryPart)
    .concat("gviz/tq?tqx=out:csv");
  return clearApiLink;
}
