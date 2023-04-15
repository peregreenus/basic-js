const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const newArr = [].concat(arr);
  let seqInd;
  let sequence;

  for (let i = 0; i < newArr.length; i++) {
    sequence = newArr[i];
    seqInd = i;

    switch (sequence) {
      case '--discard-next':
        newArr.splice(seqInd, 2);
        i = i - 1;
        break;
      case '--discard-prev':
        if (seqInd !== 0 && newArr[seqInd - 1]) {
          newArr.splice(seqInd - 1, 2);
        } else {
          newArr.splice(seqInd, 1)
        }
        i = i - 1;
        break;
      case '--double-next':
        if (seqInd !== newArr.length - 1) {
          newArr.splice(seqInd, 1, newArr[seqInd + 1]);
        } else {
          newArr.splice(seqInd, 1);
        }
        // i++;
        break;
      case '--double-prev':
        if (seqInd !== 0) {
          newArr.splice(seqInd, 1, newArr[seqInd - 1]);
        } else {
          newArr.splice(seqInd, 1);
        }
        // i++;
        break;
    }
  }

  return newArr;
}

module.exports = {
  transform
};
