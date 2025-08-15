/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return n > 0 && n === 4 ** Math.round(Math.log(n) / Math.log(4));
};