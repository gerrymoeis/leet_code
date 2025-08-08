// O(n) Time and O(1) Space

// Using Recursion
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n > 5000) return 1.0;

    const memo = new Map();

    const dp = (a, b) => {
        const key = `${a},${b}`;
        if (memo.has(key)) return memo.get(key);

        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1.0;
        if (b <= 0) return 0.0;

        let res = 0.25 * (
            dp(a - 100, b) +
            dp(a - 75, b - 25) +
            dp(a - 50, b - 50) +
            dp(a - 25, b - 75)
        );
        memo.set(key, res);
        return res;
    };

    return dp(n, n);
};

// No Recursion, and Wrong
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n > 4800) return 1.0;
    n = Math.ceil(n / 25);
    let prev = 0.5;
    let current = 0;

    for (let i = 1; i <= n; i++) {
        let a = i - 4 <= 0 ? 0 : i - 4;
        let b = i - 3 <= 0 ? 0 : i - 3;
        let c = i - 2 <= 0 ? 0 : i - 2;
        let d = i - 1 <= 0 ? 0 : i - 1;

        current = 0.25 * (
            (a <= 0 && i > 0 ? 1 : prev) +
            (b <= 0 && c <= 0 ? 0.5 : prev) +
            (c <= 0 && d > 0 ? 0 : prev) +
            prev
        );

        prev = current;
    }

    return current;
};
