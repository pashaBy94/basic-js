const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let res = "";
  str.split("").reduce((ac, el, ind, arr) => {
    if (ac === el) {
      count += 1;
    } else {
      res += count > 1 ? `${count}${ac}` : `${ac}`;
      count = 1;
    }
    if (arr.length - 1 === ind) res += count > 1 ? `${count}${el}` : `${el}`;
    return el;
  }, "");
  return res;
}

module.exports = {
  encodeLine,
};
