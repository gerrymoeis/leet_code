/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    for (let i=0; i < nums.length-1; ++i) {
        if (i+nums[i] >= nums.length-1) return true;
    }
    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let left = 0;
    for (let i=0; i < nums.length-1; ++i) {
        left += nums[i];
        i = left;
        console.log(left, i, nums[i])
        if (left >= nums.length-1) return true;
    }
    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (!nums[0]) return true;
    for (let i=0; i < nums.length-1; ++i) {
        console.log(i, nums[i]);
        
        if (i+nums[i] >= nums.length-1) return true;
        // if (nums[i+nums[i]] === 0 && i+nums[i] !== nums.length-1) return false;
    }
    return false;
};