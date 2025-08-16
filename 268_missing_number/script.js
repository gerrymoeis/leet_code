/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return nums.length * (nums.length+1) / 2 - total;
};