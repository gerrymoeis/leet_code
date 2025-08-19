/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let zeros = 0;
    for (let i=0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            zeros++;
        } else {
            zeros = 0;
        }
        count += zeros;
    }
    return count;
};