const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = String(n).split('').map(Number);

  let maxNumber = 0;

  for (let i = 0; i < numbers.length; i++) {
    const copyNumbers = [...numbers];
    copyNumbers.splice(i, 1);
    const currNumb = +(copyNumbers.join(''));

    if (currNumb > maxNumber) {
      maxNumber = currNumb;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
