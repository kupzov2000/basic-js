const { NotImplementedError } = require('../extensions/index.js');

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
  function countFrequency(s) {
    const frequencyMap = new Map();

    for (let elem of s) {
      let value = 1;
      if (frequencyMap.has(elem)) {
        value = frequencyMap.get(elem) + 1;
      }

      frequencyMap.set(elem, value)
    }

    return frequencyMap;
  }

  let s1Map = countFrequency(s1);
  let s2Map = countFrequency(s2);

  let countCommonChar = 0;

  for (let key of s1Map.keys()) {
    if (s2Map.has(key)) {
      let min = Math.min(s1Map.get(key), s2Map.get(key));
      countCommonChar = countCommonChar + min;
    }
  }

  return countCommonChar;
}

module.exports = {
  getCommonCharacterCount
};
