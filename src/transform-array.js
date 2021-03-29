const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr = '') {
  
  if (!(arr instanceof Array)) throw new Error('Not implemented');
  
  let sArr = arr;

  returnedArr = [];
  
  for(let i = 0; i < sArr.length; i++){
    
    if (sArr[i] === '--discard-next') {
      if (sArr.length > i + 1 ) {
        i = i + 1;
        returnedArr.push(undefined);
      }
    } else if (sArr[i] === '--discard-prev') { 
      if (returnedArr.length > 0) returnedArr.pop();
    } else if (sArr[i] === '--double-next') { 
      if ((sArr.length > i + 1) && true) returnedArr.push(sArr[i + 1]);
    } else if (sArr[i] === '--double-prev') {
      returnedArr.push(returnedArr[returnedArr.length - 1]);
    } else {
      returnedArr.push(sArr[i]);
    }
    
  }

  return returnedArr.filter(el => ( typeof(el) !== 'undefined' ) );

};
