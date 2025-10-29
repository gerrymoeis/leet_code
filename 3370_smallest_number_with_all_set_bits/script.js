/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    return 2 ** (n.toString(2).length) - 1;
};