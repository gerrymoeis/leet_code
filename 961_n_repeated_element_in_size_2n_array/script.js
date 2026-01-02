/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const n = nums.length / 2;
    const repeated = new Map();
    for (let i=0; i < nums.length; ++i) {
        repeated.set(nums[i], (repeated.get(nums[i]) ?? 0) + 1);
        if (repeated.get(nums[i]) === n) return nums[i];
    }
};