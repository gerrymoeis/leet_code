/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) return [i, j]
      }
    }
};

// Solution 1 - Failed
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; ++i) {
//       if (i + 1 == nums.length) {
//         if (nums[i] + nums[0] == target) return [i, 0]
//       }
//       if (nums[i] + nums[i+1] == target) return [i, i+1]
//     }
// };

nums = [1,2,23,12]
target = 13

console.log(twoSum(nums, target))