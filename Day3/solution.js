import { rucksack } from "./input.js";
import { convertLinedStrToArr } from "../utils.js";

const rucksackArr = convertLinedStrToArr(rucksack);

//pseudo code
//iterate through the array
//divide array[i] by half, find out the common letter in both halves
//push the common letter into an empty array (item array)
//iterate through the item array
//calucate the priorities

const lookup = [
  ...new Array(26).fill(0).map((_, i) => String.fromCharCode(i + 97)), //a-z
  ...new Array(26).fill(0).map((_, i) => String.fromCharCode(i + 65)), //A-Z
];

function prioritySum(array) {
  // get the itemArray
  let itemArray = [];
  for (let i = 0; i < array.length; i++) {
    const firstHalf = array[i].slice(0, array[i].length / 2);
    const secondHalf = array[i].slice(array[i].length / 2);
    for (let j = 0; j < array[i].length / 2; j++) {
      if (secondHalf.includes(firstHalf[j])) {
        itemArray[i] = firstHalf[j]; // to avoid duplicates, only one common item in each rucksack
      }
    }
  }
  // calculate the sum
  let sum = 0;
  for (let i = 0; i < itemArray.length; i++) {
    const char = itemArray[i];
    const score = lookup.indexOf(char) + 1;
    sum += score;
  }
  return sum;
}
console.log(prioritySum(rucksackArr));
//Answer: 7763
//Time complexity: O(n^2)
//Space complexity: constant

/* ---------- Part 2 ----------- */

//Pseduo code
//Iterate through the array
//group them in arrays, each has 3 rucksacks
//iterrate through subArray
//find out which letter is common in all three rucksack
//push into commonItemArray
//calculate the priority score with the same way in part 1

const grouppedArray = [];
function splitIntoThrees(array) {
  for (let i = 0; i < array.length; i += 3) {
    grouppedArray.push(array.slice(i, i + 3));
  }
  return grouppedArray;
}
splitIntoThrees(rucksackArr);

function badgeSum(array) {
  const commonItem = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i][0].length; j++) {
      if (
        array[i][1].includes(array[i][0][j]) &&
        array[i][2].includes(array[i][0][j])
      ) {
        commonItem[i] = array[i][0][j]; // to avoid duplicates, only one common item in each rucksack
      }
    }
  }
  // calculate the sum
  let sum = 0;
  for (let i = 0; i < commonItem.length; i++) {
    const char = commonItem[i];
    const score = lookup.indexOf(char) + 1;
    sum += score;
  }
  return sum;
}

console.log(badgeSum(grouppedArray));
//Answer: 2569
//Time complexity: O(n^2)
//Space complexity: constant
