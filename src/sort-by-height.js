const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const idxs = [];
  arr.map((item, idx) => item === -1 ? idxs.push(idx) : false);
  arr = arr.filter(item => item !== -1).sort((a, b) => a - b);
  idxs.map(idx => arr.splice(idx, 0, -1));

  return arr;
}

module.exports = {
  sortByHeight
};
