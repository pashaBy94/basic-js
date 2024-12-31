const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minus = [];
  const filt = arr
    .filter((el, ind) => {
      if (el === -1) {
        minus.push(ind);
        return false;
      }
      return true;
    })
    .sort((a, b) => a - b);
  minus.forEach((el) => filt.splice(el, 0, -1));
  return filt;
}

module.exports = {
  sortByHeight,
};
