const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  } else {

    let month;

    try {
      month = date.getMonth();
      Date.parse(date);
      date.toISOString();
    } catch (e) {
      throw new Error('Invalid date!');
    }

    const seasons = new Map();
    seasons.set([11, 0, 1], 'winter');
    seasons.set([2, 3, 4], 'spring');
    seasons.set([5, 6, 7], 'summer');
    seasons.set([8, 9, 10], 'autumn');

    for (let [months, season] of seasons) {
      if (months.includes(month)) {
        return season;
      }
    }
  }
}

module.exports = {
  getSeason
};
