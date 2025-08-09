/**
 * @param {number} n
 * @return {boolean}
 */
// 0 ms O(1) Time and Space
var isPowerOfTwo = function(n) {
    return n > 0 ? (n & (n-1)) === 0 : false;
}

// 1 ms O(log n) Time and O(1) Space
// var isPowerOfTwo = function(n) {
//     return 2**Math.floor(Math.log2(n)) === n;
// };

// Maximum Call Stack
// var isPowerOfTwo = function(n) {
//     if (n === 1) return true;
//     if (n % 2) return false;
//     return isPowerOfTwo(n/2) ? true : false;
// };