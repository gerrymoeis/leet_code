/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const MOD = 10**9 + 7;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    const limit = Math.round(n ** (1 / x));

    for (let num = 1; num <= limit; ++num) {
        const power = num ** x;
        for (let j = n; j >= power; --j) {
            dp[j] = (dp[j] + dp[j - power]) % MOD;
        }
    }
    return dp[n];
};