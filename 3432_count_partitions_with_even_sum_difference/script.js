/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let total = 0;
    for (let i=0; i < nums.length; ++i) {
        total += nums[i];
    }
    let left = 0;
    let partition = 0;
    for (let i=0; i < nums.length-1; ++i) {
        left += nums[i];
        if (Math.abs(left - (total - left)) % 2 === 0) {
            partition++;
        }
    }
    return partition;
};