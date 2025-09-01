/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let max = 0;
    let jump = 0;
    let count = 0;
    for (let i=0; i < nums.length-1; ++i) {
        max = Math.max(max, i+nums[i]);
        if (jump === i) {
            jump = max;
            count++;
        }
    }
    return count;
};