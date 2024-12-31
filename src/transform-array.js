const { NotImplementedError } = require("../extensions/index.js");

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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const res = [...arr];
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "--double-next") {
      if (res[i + 1]) res[i] = res[i + 1];
      else res[i] = null;
    }
    if (res[i] === "--double-prev") {
      if (res[i - 1]) res[i] = res[i - 1];
      else res[i] = null;
    }
    if (res[i] === "--discard-next") {
      if (res[i + 1]) {
        res[i] = null;
        res[i + 1] = null;
      } else res[i] = null;
    }
    if (res[i] === "--discard-prev") {
      if (res[i - 1]) {
        res[i] = null;
        res[i - 1] = null;
      } else res[i] = null;
    }
  }
  return res.filter((el) => el !== null);
}

module.exports = {
  transform,
};
