/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    const d = Math.floor(n/10 ** (Math.ceil(Math.log10(Math.abs(n) + 1)) - 1));
    return !(n % (2*d + d**2));
};