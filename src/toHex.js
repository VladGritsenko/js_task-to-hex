'use strict';

/**
 * The function takes a number and returns
 * its hexadecimal representation as a lower
 * case string. For example 256 is converted
 * то 'ff'. You should not use .toString() method.
 *
 * Conversion algorithm:
 * Divide the number by 16 with the remainder
 * 50/16 = 3 (remainder 2)
 * 3/16 = 0 (remainder 3)
 * When the whole part is 0, then we take all
 * the remainders in the reverse order
 *
 * 50 === '32'
 *
 * @param {number} value
 *
 * @return {string}
 */
function toHex(value) {
  const codeSymbols = [];
  const hex = 16;
  const hexScale = '0123456789ABCDEF';
  let number = value;

  while (number >= hex) {
    codeSymbols.push(hexScale[number % hex]);
    number = parseInt(number / hex);
  }

  codeSymbols.push(hexScale[number]);
  return codeSymbols.reverse().join('');
}

module.exports = toHex;
