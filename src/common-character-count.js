const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  function repeatFreq(s) {
    let map = new Map();

    for (let elem of s) {
      let value = 1;
      if (map.has(elem)) {
        value = map.get(elem) + 1;
      }
      map.set(elem, value);
    }
    return map;
  }

  let mapS1 = repeatFreq(s1);
  let mapS2 = repeatFreq(s2);

  let result = 0;

  for (let key of mapS1.keys()) {
    if (mapS2.has(key)) {
      result += Math.min(mapS1.get(key), mapS2.get(key));
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
