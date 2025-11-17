/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let d = Infinity;
    for (let i=0; i < nums.length; ++i) {
        if (nums[i] && d < k) return false;
        d = nums[i] ? 0 : d+1;
    }
    return true;
};