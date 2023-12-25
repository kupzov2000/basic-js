const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    addition = '',
    separator = '+',
    additionSeparator = '|',
    repeatTimes = 1,
    additionRepeatTimes = 1
  } = options || {};

  const strStr = String(str);
  const additionStr = String(addition);

  const repAddition = Array(additionRepeatTimes).fill(additionStr).join(additionSeparator);
  const repStr = Array(repeatTimes).fill(strStr + repAddition).join(separator);

  return repStr;
}

module.exports = {
  repeater
};
