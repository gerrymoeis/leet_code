/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    setNums = new Set();
    sneaky = new Set();
    for (let i=0; i < nums.length; ++i) {
        if (setNums.has(nums[i])) sneaky.add(nums[i]);
        setNums.add(nums[i]);
    }
    return [...sneaky];
};