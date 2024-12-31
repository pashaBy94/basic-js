const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let val = arguments[1];
    if (val === undefined) {
      this.bag = 1;
      val = 1;
    } else {
      val += 1;
      this.bag = Math.max(val, this.bag);
    }
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object") this.calculateDepth(arr[i], val);
    }
    return this.bag;
  }
}

module.exports = {
  DepthCalculator,
};
