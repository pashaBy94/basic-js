const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return `${n}`.split("").reduce((ac, el, ind, arr) => {
    const val = +arr.filter((_, id) => id !== ind).join("");
    if (val > ac) return val;
    return ac;
  }, 0);
}

module.exports = {
  deleteDigit,
};
