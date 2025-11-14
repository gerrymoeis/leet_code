/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    let diff = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    
    for (let [r1, c1, r2, c2] of queries) {
        diff[r1][c1]++;
        diff[r2 + 1][c1]--;
        diff[r1][c2 + 1]--;
        diff[r2 + 1][c2 + 1]++;
    }
    
    let mat = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const above = mat[i - 1]?.[j] ?? 0;
            const left = mat[i]?.[j - 1] ?? 0;
            const diag = mat[i - 1]?.[j - 1] ?? 0;
            mat[i][j] = diff[i][j] + above + left - diag;
        }
    }
    
    return mat;
};