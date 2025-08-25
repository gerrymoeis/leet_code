/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let m = mat.length, n = mat[0].length, res = new Array(m*n), r = 0, c = 0, d = 1;
    for (let i = 0; i < m*n; i++) {
        res[i] = mat[r][c];
        if (d === 1) {
            if (c === n-1) { r++; d = -1; }
            else if (r === 0) { c++; d = -1; }
            else { r--; c++; }
        } else {
            if (r === m-1) { c++; d = 1; }
            else if (c === 0) { r++; d = 1; }
            else { r++; c--; }
        }
    }
    return res;
};