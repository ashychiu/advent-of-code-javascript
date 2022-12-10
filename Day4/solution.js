import { pairs } from "./input.js";
import { convertLinedStrToArr } from "../utils.js";

const pairsArray = convertLinedStrToArr(pairs);

//pseudo code
// iterate through array
// split array[i]
// if either one pair's start and end falls inside the other's start and end
// counter ++

function fullyContainsAnother(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let splited = arr[i].split(/,|-/);
    let start1 = Number(splited[0]),
      end1 = Number(splited[1]);
    let start2 = Number(splited[2]),
      end2 = Number(splited[3]);
    if (start1 >= start2 && end1 <= end2) counter++;
    else if (start2 >= start1 && end2 <= end1) counter++;
  }
  return counter;
}

console.log(fullyContainsAnother(pairsArray));

/* ---------- Part 2 ----------- */

//Pseudo code
//Same as above, but this time partially overlap, which is
//either one pair's start or end fall inside the other's start & end

function partiallyContainsAnother(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let splited = arr[i].split(/,|-/);
    let start1 = Number(splited[0]),
      end1 = Number(splited[1]);
    let start2 = Number(splited[2]),
      end2 = Number(splited[3]);
    if (start1 <= start2 && end1 >= start2) counter++;
    else if (start2 <= start1 && end2 >= start1) counter++;
  }
  return counter;
}

console.log(partiallyContainsAnother(pairsArray));
