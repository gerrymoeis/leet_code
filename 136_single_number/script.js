/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((a,b) => a^b,0)
};

// let nums = [2,2,1]
// nums = [4,1,2,1,2]
// nums = [1]
let nums = [4,1,2,1,7,0,2,0,4]
console.log(singleNumber(nums))

// Experiment
// var singleNumber = function(nums) {
//     let single = nums[0]
//     let j = 0
//     for (let i=1; i < nums.length; i++) {
//       if (single == nums[i]) {
//         single = nums[i++]
//       }
//     }
//     return single
// };

// Attempt 1 - Failed
// var singleNumber = function(nums) {
//     return nums[nums.reduce((a,b) => a ^ b,0)+1]
// };