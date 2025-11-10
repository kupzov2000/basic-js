const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const sample = Number(sampleActivity);
  const numb = 0.693;
  if (
    typeof sampleActivity !== 'string' ||
    !Number.isFinite(sample) ||
    sample > 15 ||
    sample <= 0
  ) {
    return false;
  }

  const age = Math.ceil(
    Math.log(MODERN_ACTIVITY / sample) / (numb / HALF_LIFE_PERIOD)
  );
  return age;
}

module.exports = {
  dateSample
};
