const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix = []) {
  
  let earCount = 0;
  const xSize = matrix.length;

  if (xSize == 0) return 0;
  
  for (let i = 0; i < xSize; i++)
  {
    matrix[i].forEach(element => {if (element === '^^') ++earCount; return earCount; })
  }
  
  return earCount;

};
