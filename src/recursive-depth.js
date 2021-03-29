const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, currDepth = 1) {
    
    if((currDepth===1)&&(!Array.isArray(arr))) throw new Error('Not array');

    let totalDepth = currDepth;

    for( let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])) {
        let callbackDepth = this.calculateDepth(arr[i], currDepth + 1);
        totalDepth = (callbackDepth > totalDepth) ? callbackDepth : totalDepth;
      }
    }

    return totalDepth;

  }
};