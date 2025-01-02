const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag;
  }
  translateSymbol(strings, key, encript) {
    const exp = /[a-z]/g;
    const n = 26;
    let currentInd = 0;
    return strings.map((el) => {
      if (el.match(exp)) {
        const codeString = el.charCodeAt() - 97;
        const codeKey = key[currentInd].charCodeAt() - 97;
        currentInd = currentInd == key.length - 1 ? 0 : currentInd + 1;
        return String.fromCharCode(
          ((encript
            ? codeString + codeKey
            : codeString - codeKey < 0
            ? n + (codeString - codeKey)
            : codeString - codeKey) %
            n) +
            97
        ).toUpperCase();
      }
      return el;
    });
  }
  encrypt() {
    if (!arguments[0] | !arguments[1]) throw new Error("Incorrect arguments!");
    const strings = arguments[0].split("").map((el) => el.toLowerCase());
    const key = arguments[1].toLowerCase();
    const result = this.translateSymbol(strings, key, true);
    if (this.flag === false) return result.reverse().join("");
    return result.join("");
  }
  decrypt() {
    if (!arguments[0] | !arguments[1]) throw new Error("Incorrect arguments!");
    const strings = arguments[0].split("").map((el) => el.toLowerCase());
    const key = arguments[1].split("").map((el) => el.toLowerCase());
    const result = this.translateSymbol(strings, key, false);
    if (this.flag === false) return result.reverse().join("");
    return result.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
