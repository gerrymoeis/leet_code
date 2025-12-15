/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let total = 1;
    let streaks = 1;
    for (let i=1; i < prices.length; ++i) {
        if (prices[i-1] - prices[i] === 1) streaks++;
        else streaks = 1;
        total += streaks;
    }
    return total;
};