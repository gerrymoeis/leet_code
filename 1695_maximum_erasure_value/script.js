/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    if (nums.length === 1) return nums[0]
    
    let unique = new Set([nums[0]])
    let total = nums[0]
    let start = 0
    let max = 0
    
    for (let i=1; i < nums.length; i++) {
      if (unique.has(nums[i])) {
        max = Math.max(max, total)
        while (unique.has(nums[i])) {
          unique.delete(nums[start])
          total -= nums[start]
          start++
        }
        unique.add(nums[i])
        total += nums[i]
      }
      else {
        unique.add(nums[i])
        total += nums[i]
        if (i === nums.length-1) {
          max = Math.max(max, total)
        }
      }
    }
    
    return max
};

const tests = [
    [10000],
    [1,2],
    [4,2,4,5,6],
    [5,2,1,2,5,2,1,2,5],
    [4,1,2,3,4,5,6],
    [5,2,3,1,2,5,2,1,2,5],
    [4,5,1,2,3],
    [1,2,3,4,5,6,7,8,1,100]
]

for (test of tests) {
  console.log(maximumUniqueSubarray(test))
}