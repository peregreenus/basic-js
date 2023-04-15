const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const fragments = [];
  str = typeof str === 'string' ? str : str + '';

  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';

  if (options.addition === '' || options.addition === undefined) {
    options.addition = '';
  } else {
    options.addition = options.addition + '';
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    fragments.push(str + Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator));
  }

  return fragments.join(options.separator);
}

module.exports = {
  repeater
};
