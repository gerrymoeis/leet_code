/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let total = 0;
    let first = 0;
    let second = 0;
    for (let i=0; i < bank.length - 1; ++i) {
        for (let j=0; j < bank[i].length; ++j) {
            first += parseInt(bank[i][j]);
            second += parseInt(bank[i+1][j]);
        }
        if (!second) continue;
        total += first * second;
        first = 0;
        second = 0;
    }
    return total;
};