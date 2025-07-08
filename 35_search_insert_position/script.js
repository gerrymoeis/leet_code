/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let i=0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    }
    else if (nums[i] > target) {
      return i
    }
    else if (target > nums[nums.length - 1]) {
      return nums.length
    }
  }
};

const nums = [1]
const target = -1
console.log(searchInsert(nums, target))