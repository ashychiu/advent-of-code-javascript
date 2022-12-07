import { strategy } from "./input.js";
import { convertLinedStrToArr } from "../utils.js";

const strategyArr = convertLinedStrToArr(strategy);

function shapeSelectedScore(array) {
  let score = 0;
  for (let i = 0; i < array.length; i++) {
    const shapeSelected = array[i][2];
    switch (shapeSelected) {
      case "X":
        score += 1;
        break;
      case "Y":
        score += 2;
        break;
      case "Z":
        score += 3;
        break;
      default:
        score += 0;
    }
  }
  return score;
}

// A: Rock
// B: Paper
// C: Scissors

// X: Rock
// Y: Paper
// Z: Scissors

const outcomeScoreChart = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
};

function outcomeScore(array) {
  let score = 0;
  for (let i = 0; i < array.length; i++) {
    const opp = array[i][0];
    const player = array[i][2];
    let outcomeOfEachRound = outcomeScoreChart[opp][player];
    score += outcomeOfEachRound;
  }
  return score;
}

const totalScore = shapeSelectedScore(strategyArr) + outcomeScore(strategyArr);

console.log("Part 1 Total Score", totalScore);
//Time complexity: O(n)
//Space complexity: constant

/* ---------- Part 2 ----------- */

// A: Rock       //selectionScore: 1
// B: Paper     //selectionScore: 2
// C: Scissors  //selectionScore: 3

// X: to lose   // outcomeScore: 0
// Y: in draw   // outcomeScore:  3
// Z: to win    // outcomeScore:  6

const howItEndsScoreChart = {
  A: { X: 0 + 3, Y: 3 + 1, Z: 6 + 2 },
  B: { X: 0 + 1, Y: 3 + 2, Z: 6 + 3 },
  C: { X: 0 + 2, Y: 3 + 3, Z: 6 + 1 },
};

function howItEndsScore(array) {
  let score = 0;
  for (let i = 0; i < array.length; i++) {
    const opp = array[i][0];
    const player = array[i][2];
    let outcomeOfEachRound = howItEndsScoreChart[opp][player];
    score += outcomeOfEachRound;
  }
  return score;
}

console.log("Part 2 Score", howItEndsScore(strategyArr));
//Time complexity: O(n)
//Space complexity: constant
