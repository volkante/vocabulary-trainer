"use strict";

/* console.log(shuffleArray(["ali", "veli", "karaveli", "mi"]));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
} */

const radiusArr = [3, 1, 2, 4];

/* Util functions for calculating */

const calculateCircumference = function (radius) {
  const circumference = 2 * Math.PI * radius;
  return circumference;
};

const calculateArea = function (radius) {
  const area = Math.PI * radius * radius;
  return area;
};

const calculateDiameter = function (radius) {
  const diameter = 2 * radius;
  return diameter;
};

/* Calculate function */
const calculate = function (radiusArr, calculateCb) {
  const output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(calculateCb(radiusArr[i]));
  }
  return output;
};

// Log results
console.log("Circumferences", calculate(radiusArr, calculateCircumference));
console.log("Areas", calculate(radiusArr, calculateArea));
console.log("Diameter", calculate(radiusArr, calculateDiameter));
