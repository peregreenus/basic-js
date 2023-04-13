const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  return Array.isArray(members) ? members
    .filter(member => typeof member === 'string' && isNaN(+member))
    .map(i => i.trim().toUpperCase())
    .sort()
    .reduce((acc, curr) => acc + curr[0], '') : false;
  // let result = '';
  // members.sort();

  // for (let i = 0; i < members.length; i++) {
  //   if (typeof members[i] === 'string' && isNaN(+members[i])) {
  //     result += members[i].trim()[0].toUpperCase();
  //   } else {
  //     continue;
  //   }
  // }

  // return result;
}

module.exports = {
  createDreamTeam
};
