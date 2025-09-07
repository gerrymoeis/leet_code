/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const arr = n % 2 ? [0] : [];
    for (let i=1; i <= Math.floor(n/2); ++i) {
        arr.push(i);
        arr.push(-i);
    }
    return arr;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const arr = [];
    for (let i=1-n; i < n; i+=2) {
        arr.push(i);
    }
    return arr;
};