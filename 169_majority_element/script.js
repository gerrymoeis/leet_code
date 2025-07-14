/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0]
    
    let n = nums[0]
    let count = 1
    for (let i=1; i < nums.length; i++) {
      if (count === 0) {
        n = nums[i]
        count = 1
      }
      else if (n === nums[i]) count++
      else if (n !== nums[i]) count--
    }
    return n
};

// let nums = [3,2,3]
// let nums = [3,2,3,4,4,4,4,4,2,2,6,1,2,3,4,1,4,100,234,234,12,7,8,4,1]
// let nums = [1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))

// Experiment
// var majorityElement = function(nums) {
//     if (nums.length === 1) return nums[0]
    
//     let n = [nums[0]]
//     for (let i=1; i < nums.length; i++) {
//       for (j in n) {
//         if (n[j] == nums[i])
//       }
//     }
//     return Math.ceil(total / nums.length)
// };

// Attempt 1
// var majorityElement = function(nums) {
//     if (nums.length === 1) return nums[0]
    
//     let total = 0
//     for (i in nums) {
//       total += nums[i]
//     }
//     return Math.ceil(total / nums.length)
// };

// Experiments
// var majorityElement = function(nums) {
//     if (nums.length === 1) return nums[0]
    
//     let n = nums[0]
//     let count = 1
//     for (let i=1; i < nums.length; i++) {
//       if (count === 0) {
//         n = nums[i]
//       }
//       else if (n === nums[i]) count++
//       else if (n !== nums[i]) count--
      
//       // if (n === nums[i]) {
//       //   count++
//       // }
//       // else if (n !== nums[i]) {
//       //   count--
//       // }
//       // else if (count === 0) {
//       //   n = nums[i]
//       //   count++
//       // }
      
//       // else if (n !== nums[i] && count === 0) {
//       //   n = nums[i]
//       //   count++
//       // }
//       // else {
//       //   count--
//       // }
      
//       // else {
//       //   if (count === 0) {
//       //     n = nums[i]
//       //     count++
//       //   }
//       //   else {
//       //     count--
//       //   }
//       // }
//       console.log(count)
//     }
//     return n
// };