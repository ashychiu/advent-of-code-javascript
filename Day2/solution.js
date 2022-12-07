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

console.log("Total Score", totalScore);
