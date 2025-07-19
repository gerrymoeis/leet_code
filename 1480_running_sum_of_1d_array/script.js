/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let num = nums[0]
    for (let i=1; i < nums.length; i++) {
      num += nums[i]
      nums[i] = num
    }
    return nums
};

tests = [[1,2,3,4], [1,1,1,1,1], [3,1,2,10,1]]
for (test of tests) {
  console.log(runningSum(test))
}