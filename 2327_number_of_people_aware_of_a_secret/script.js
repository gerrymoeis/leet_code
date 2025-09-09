var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1e9 + 7;
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;

    let activeSharers = 0;
    for (let day = 2; day <= n; day++) {
        if (day - delay >= 1) {
            activeSharers = (activeSharers + dp[day - delay]) % MOD;
        }
        if (day - forget >= 1) {
            activeSharers = (activeSharers - dp[day - forget] + MOD) % MOD;
        }
        dp[day] = activeSharers;
    }

    let ans = 0;
    for (let i = n - forget + 1; i <= n; i++) {
        ans = (ans + dp[i]) % MOD;
    }
    return ans;
};