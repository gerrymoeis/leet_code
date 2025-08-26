/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxD = 0, maxA = 0;
    for (const [l,w] of dimensions) {
        const d = Math.sqrt(l**2 + w**2);
        if (d > maxD) {
            maxD = d;
            maxA = l*w;
        } else if (d === maxD) {
            maxA = Math.max(maxA, l*w);
        }
    }
    return maxA;
};