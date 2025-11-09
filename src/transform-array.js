const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let copyArr = [...arr];
  let newArr = [];
  let actions = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  let skipped = false;

  for (let i = 0; i < copyArr.length; i += 1) {
    const currElem = copyArr[i];

    if (!actions.includes(currElem)) {
      newArr.push(currElem);
      skipped = false;
      continue;
    }

    if (i === 0 || i >= copyArr.length) {
      continue;
    } else if (currElem === '--double-next' && copyArr[i + 1]) {
      newArr.push(copyArr[i + 1]);
      skipped = false;
    } else if (currElem === '--double-prev') {
      if (!skipped && newArr.length) newArr.push(newArr[newArr.length - 1]);
      skipped = false;
    } else if (currElem === '--discard-next') {
      i += 1;
      skipped = true;
    } else if (currElem === '--discard-prev') {
      if (!skipped && newArr.length) newArr.pop();
      skipped = false;
    }
  }
  return newArr;
}

module.exports = {
  transform
};
