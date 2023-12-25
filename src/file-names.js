const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const uniqueNames = {};
  let newName = '';
  let k = null;

  names.map((name, idx) => {
    if (uniqueNames[name]) {
      uniqueNames[name] += 1;
      k = uniqueNames[name] - 1;
      newName = `${name}(${k})`;

      names.splice(idx, 1, newName);
      uniqueNames[newName] = 1;
    } else {
      uniqueNames[name] = 1;
    }
  });

  return names;
}

module.exports = {
  renameFiles
};
