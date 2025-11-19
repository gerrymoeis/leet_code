/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let bits = 0;
    for (let num of nums) {
        if (num % original !== 0) continue;
        const n = num / original;
        if ((n & (n - 1)) === 0)
            bits |= n;
    }

    bits++;
    return original * (bits & -bits);
};