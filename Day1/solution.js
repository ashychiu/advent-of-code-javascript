import { calories } from "./input.js";

const array = calories.split("\n\n").map((line) => line.split("\n"));

function maxCalories(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let elfCalories = 0;
    array[i].forEach((calories) => {
      elfCalories += Number(calories);
    });
    max = Math.max(max, elfCalories);
  }
  return max;
}

console.log(maxCalories(array));
//Answer: 64929
//Time complexity: O(n^2)
//Space complexity: Constant

// Part 2

function topThreeCombined(array) {
  let allElvesCalories = [];
  for (let i = 0; i < array.length; i++) {
    let elfCalories = 0;
    array[i].forEach((calories) => {
      elfCalories += Number(calories);
    });
    allElvesCalories.push(elfCalories);
  }
  let topThree = allElvesCalories.sort((a, b) => b - a).slice(0, 3);
  return topThree.reduce((a, b) => a + b, 0);
}

console.log(topThreeCombined(array));
//Answer: 193697
//Time complexity: O(n^2)
//Space complexity: Constant
