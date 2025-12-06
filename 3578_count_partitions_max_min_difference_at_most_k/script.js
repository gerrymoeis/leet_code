/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function(nums, k) {
    const n = nums.length, MOD = 1_000_000_007;
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;

    const mx = [], mn = [];
    let l = 0, sum = 0;

    for (let r = 0; r < n; r++) {
        while (mx.length && nums[mx[mx.length - 1]] <= nums[r]) mx.pop();
        while (mn.length && nums[mn[mn.length - 1]] >= nums[r]) mn.pop();
        mx.push(r);
        mn.push(r);

        while (nums[mx[0]] - nums[mn[0]] > k) {
            if (mx[0] === l) mx.shift();
            if (mn[0] === l) mn.shift();
            sum = (sum - dp[l] + MOD) % MOD;
            l++;
        }

        sum = (sum + dp[r]) % MOD;
        dp[r + 1] = sum;
    }

    return dp[n];
};