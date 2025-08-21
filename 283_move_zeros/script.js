/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos = 0
    for (let i=0; i < nums.length; ++i) {
        if (nums[i]) {
            if (i !== pos) {
                [nums[i], nums[pos]] = [nums[pos], nums[i]];
            }
            pos++;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos = 0
    for (let i=0; i < nums.length; ++i) {
        if (nums[i]) {
            if (i !== pos) {
                nums[pos] = nums[i];
                nums[i] = 0;
            }
            pos++;
        }
    }
};