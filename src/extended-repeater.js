const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  if (str === null) str = 'null';
  if (options.addition === null) addition = 'null';

  let repeatArr = [];
  for (let i = 0; i < additionRepeatTimes; i++){
    repeatArr.push(addition)
  };
  let repeatedSeparator = repeatArr.join(additionSeparator);

  stringArr = [];
  for (let i = 0; i < repeatTimes; i++){
    stringArr.push(str + repeatedSeparator);
  };
  let repeatedStr = stringArr.join(separator);

  return repeatedStr;
};
