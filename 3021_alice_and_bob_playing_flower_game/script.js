// True O(1) time and space one liner
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
    return (Math.ceil(n/2) * Math.floor(m/2)) + (Math.floor(n/2) * Math.ceil(m/2));
};


// Experiment O(1) time and space
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
    if (n % 2 && m % 2 && n === m) return n * Math.ceil(m/2) - Math.ceil(m/2);
    if (n < m) [n, m] = [m, n];
    return n * Math.ceil(m/2);
};


// O(n square) time and O(1) space
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
    let count = 0;
    for (let x=1; x <= n; ++x) {
        for (let y=1; y <= m; ++y) {
            if ((x+y) % 2 === 1) count++;
        }
    }
    return count;
};