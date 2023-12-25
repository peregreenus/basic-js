const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let zeroIdxs;

  matrix.map((row, idx, array) => {
    if (!idx) {
      sum = row.reduce((acc, curr) => acc + curr);
    } else {
      sum += row.reduce((acc, curr, i) => !zeroIdxs.includes(i) ? acc + curr : 0, 0);
    }

    if (idx !== array.length - 1) {
      zeroIdxs = '';
      row.map((item, i) => item === 0 ? zeroIdxs += i : false);
    }
  });

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
