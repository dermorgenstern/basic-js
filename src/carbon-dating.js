const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(typeof(sampleActivity) !== 'string') return false;
  if (isNaN(sampleActivity) || isNaN(parseFloat(sampleActivity))) return false;
  if (parseFloat(sampleActivity) <= 0) return false;
  if (parseFloat(sampleActivity) > MODERN_ACTIVITY) return false;

  return (Math.log2(MODERN_ACTIVITY/parseFloat(sampleActivity))*HALF_LIFE_PERIOD/Math.log2(2));

};
