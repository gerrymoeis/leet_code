/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const w = Math.floor(n / 7), d = n % 7;
    return Math.floor((7 * w * (w + 7)) / 2) + w * d + Math.floor(d * (d + 1) / 2);
};