/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 0
  for (i in nums) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
};

// const nums = [3,2,2,3]
const nums = [0,1,2,2,3,0,4,2]
const val = 2
console.log(removeElement(nums, val))