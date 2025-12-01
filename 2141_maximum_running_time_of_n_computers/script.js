/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
    batteries.sort((a, b) => a - b);
    let sum = batteries.reduce((a, c) => a + c, 0);

    while (batteries.at(-1) > parseInt(sum / n)) {
        n--;
        sum -= batteries.pop();
    }

    return parseInt(sum / n);
};