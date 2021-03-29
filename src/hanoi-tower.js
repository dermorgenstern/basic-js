const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let numOfMoves = 2 ** disksNumber - 1;
  return {
    turns: numOfMoves,
    seconds: Math.floor(numOfMoves * 3600 / turnsSpeed),
  } ;
};
