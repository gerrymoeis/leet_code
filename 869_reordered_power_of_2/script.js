/**
 * @param {number} n
 * @return {boolean}
 */
function signature(x) {
    const count = Array(10).fill(0);
    while (x > 0) {
        count[x % 10]++;
        x = Math.floor(x / 10);
    }
    return count.join(',');
}

const powerSignatures = new Set();
for (let i = 0; i < 31; i++) {
    powerSignatures.add(signature(1 << i));
}

var reorderedPowerOf2 = function(n) {
    return powerSignatures.has(signature(n));
};