const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let arrMap = new Map();

  let newArr = arr.map((elem) => elem.split('.').reverse())

  for (let i = 0; i < newArr.length; i++) {
    let currentDns = '';
    for (let j = 0; j < newArr[i].length; j++) {
      currentDns += `.${newArr[i][j]}`;
      let value = 1;

      if (arrMap.has(currentDns)) {
        value = arrMap.get(currentDns) + 1;
        arrMap.set(currentDns, value);
      } else {
        arrMap.set(currentDns, value);
      }
    }
  }

  return Object.fromEntries(arrMap.entries());
}

module.exports = {
  getDNSStats
};
