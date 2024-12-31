const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (this.arr) this.arr.push(`( ${value} )`);
    else this.arr = [`( ${value} )`];
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.arr.length
    ) {
      this.arr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if (this.arr) this.arr.reverse();
    return this;
  },

  finishChain() {
    const result = this.arr.join("~~");
    this.arr.length = 0;
    return result;
  },
};

module.exports = {
  chainMaker,
};
