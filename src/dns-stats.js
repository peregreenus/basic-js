const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.map(domain => {
    const domainArr = domain.split('.').reverse();
    return domainArr.map((_, idx, array) => {
      const prop = `.${array.slice(0, idx + 1).join('.')}`;
      return obj[prop] ? obj[prop] += 1 : obj[prop] = 1;
    });
  });

  return obj;
}

module.exports = {
  getDNSStats
};
