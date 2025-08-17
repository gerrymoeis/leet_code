/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    // quick answers
    if (k === 0) return 1.0;
    if (n >= k + maxPts - 1) return 1.0;

    // circular buffer to store the last `maxPts` dp values
    const buf = new Array(maxPts).fill(0.0);
    buf[0] = 1.0;               // dp[0] = 1
    let windowSum = 1.0;       // sum of last up to maxPts dp's (initially dp[0])
    let result = 0.0;

    for (let i = 1; i <= n; i++) {
        const dpi = windowSum / maxPts;   // dp[i]

        if (i < k) {
            // still drawing in future => dp[i] contributes to window for next dp's
            windowSum += dpi;
        } else {
            // stopping state (i >= k) => contributes to final answer
            result += dpi;
        }

        // remove dp[i - maxPts] from windowSum when i - maxPts >= 0
        const idx = i % maxPts;          // location in circular buffer for dp[i - maxPts]
        windowSum -= buf[idx];           // buf[idx] currently holds dp[i - maxPts] (or 0 if none)
        // overwrite buffer slot with dp[i]
        buf[idx] = dpi;
    }

    return result;
};