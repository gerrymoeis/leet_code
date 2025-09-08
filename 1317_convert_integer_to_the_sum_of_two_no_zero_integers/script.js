


// Experiment
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const d = n > 10 ? n % 10 : 0;
    return n%2 ? [n-(d+2),d+2] : [n-(d+1),d+1];
};


// chatgpt solution, mehh
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    if (n >= 2 && n <= 9) return [1, n - 1];
    
    const noZero = (x) => {
        while (x > 0) {
            if (x % 10 === 0) return false;
            x = (x / 10) | 0;
        }
        return true;
    };

    const digits = Math.floor(Math.log10(n)) + 1;
    let rep = 0;
    for (let L = 1; L <= digits - 1; ++L) {
        rep = rep * 10 + 1;
        for (let d = 1; d <= 9; ++d) {
            const b = rep * d;
            if (b >= n) continue
            const a = n - b;
            if (noZero(a)) return [a, b];
        }
    }
    return [n - 1, 1];
};