import { buffer } from "./input.js";

//Pseudo code
//iterate through the string
//slice(i, i+4)
//if new Set has the same length, they are all unique
//return i+4
//otherwise continue the loop

const firstMarker = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (new Set(string.slice(i, i + 4)).size === 4) return i + 4;
  }
};

console.log(firstMarker(buffer));
//Answer: 1343
//Time complexity: O(n)
//Space complexity: constant

/* ---------- Part 2 ----------- */

//Pseudo code
//Same as above, but this time slice.(i, i+14)
//return i+14 if found

const firstMessageMarker = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (new Set(string.slice(i, i + 14)).size === 14) return i + 14;
  }
};

console.log(firstMessageMarker(buffer));
//Answer: 2193
//Time complexity: O(n)
//Space complexity: constant
