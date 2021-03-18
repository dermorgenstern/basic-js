const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15.0; 
const HALF_LIFE_PERIOD= 5730.0;

module.exports = function dateSample(sampleActivity) {

  if (typeof (sampleActivity) !== 'string') return false;
  if (isNaN(sampleActivity) || isNaN(parseFloat(sampleActivity))) return false;
  if (parseFloat(sampleActivity) <= 0) return false;
  if (parseFloat(sampleActivity) > MODERN_ACTIVITY) return false;

  return Math.ceil(Math.log2(MODERN_ACTIVITY / parseFloat(sampleActivity)) / Math.log2(2) * HALF_LIFE_PERIOD);

};