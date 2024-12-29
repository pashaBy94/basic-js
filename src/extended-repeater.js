const { NotImplementedError } = require("../extensions/index.js");

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
  const arr = [];
  arr.length = options.repeatTimes || 1;
  const add = [];
  add.length = options.additionRepeatTimes || 1;
  add.fill(
    String(options.addition) === "undefined" ? "" : String(options.addition)
  );
  arr.fill(str + add.join(options.additionSeparator || "|"));
  return arr.join(options.separator || "+");
}

module.exports = {
  repeater,
};
