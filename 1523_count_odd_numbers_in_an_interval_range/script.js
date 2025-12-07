/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0;
    for (let i=low; i <= high; i+=2) {
        if (i % 2) count++;
        else i--;
    }
    return count;
};