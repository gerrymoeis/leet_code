/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    let n = nums[0];
    for (let i=1; i < nums.length; ++i) {
        if (nums[i]-nums[i-1] !== 1) {
            res.push(n != nums[i-1] ? `${n}->${nums[i-1]}` : `${n}`);
            n = nums[i];
        }
    }
    if (nums.length > 0) {
        res.push(n != nums[nums.length-1] ? `${n}->${nums[nums.length-1]}` : `${n}`);
    }
    return res;
};