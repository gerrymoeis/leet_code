/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const d = Math.abs(z-x)-Math.abs(z-y);
    return !d ? 0 : d < 0 ? 1 : 2;
};