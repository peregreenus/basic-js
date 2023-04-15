const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  let k;
  for (let i = 0; i < str.length; i++) {
    k = i + 1;
    while (str[i] === str[k]) {
      count++;
      k++;
    }

    res += count + str[i];
    i = k - 1;
    count = 1;
  }

  return res.replaceAll('1', '');
}

module.exports = {
  encodeLine
};
