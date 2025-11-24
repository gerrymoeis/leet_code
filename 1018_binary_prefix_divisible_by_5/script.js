/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let val = 0;
    for (let i=0; i < nums.length; ++i) {
        val = ((val << 1) + nums[i]) % 5;
        nums[i] = val === 0;
    }
    return nums;
};