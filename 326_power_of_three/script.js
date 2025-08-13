/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n > 0 && 3**Math.round(Math.log(n)/Math.log(3)) === n;
};