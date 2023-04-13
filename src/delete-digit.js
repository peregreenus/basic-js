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
  n = n.toString();
  let max = 0;
  let newMax = 0;

  for (let i = 0; i < n.length; i++) {
    newMax = n.replace(n[i], '');
    if (!newMax.startsWith('0')) {
      if (max < newMax) max = newMax;
    }
  }

  return +max;
}

module.exports = {
  deleteDigit
};
