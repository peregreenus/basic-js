const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  matrix.map((row, i) => {
    const arr = [];
    row.map((_, k) => {
      arr.push(countMines(matrix, i, k));
    });
    result.push(arr);
  });


  function countMines(matrix, rowIdx, colIdx) {
    let count = matrix[rowIdx][colIdx] ? -1 : 0;

    for (let i = -1; i <= 1; i++) {
      for (let k = -1; k <= 1; k++) {
        if (rowIdx - i < 0 || colIdx - k < 0 ||
          rowIdx - i > matrix.length - 1 ||
          matrix[rowIdx - i][colIdx - k] === undefined) {
          continue;
        } else if (matrix[rowIdx - i][colIdx - k]) {
          count++;
        }
      }
    }
    return count;
  }

  return result;
}

module.exports = {
  minesweeper
};
