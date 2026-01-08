/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const n = nums1.length, m = nums2.length;
    const NEG = -1e9;
    const dp = Array.from({length: n+1}, () => Array(m+1).fill(NEG));

    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            let take = nums1[i-1]*nums2[j-1] + Math.max(0, dp[i-1][j-1]);
            dp[i][j] = Math.max(take, dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[n][m];
};