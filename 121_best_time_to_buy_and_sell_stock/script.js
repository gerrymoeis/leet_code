/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0

    let minBuy = prices[0]
    let profit = 0
    for (let i=1; i < prices.length; i++) {
      if (prices[i] < minBuy) {
        minBuy = prices[i]
      }
      else if (profit < prices[i] - minBuy) {
        profit = prices[i] - minBuy
      }
    }
    return profit
};

let prices = [3, 2, 7, 10, 1, 7, 0, 1, 10]
console.log(maxProfit(prices))