/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 0) return 0
  
  let k = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
};

nums = []
console.log(removeDuplicates(nums))

// [0,0,1,1,1,2,2,3,3,4]
// [0,1,1,2,2,3,3,4]


// Solution 1
// var removeDuplicates = function(nums) {
//   let count = 0
//   for (let i=0; i < nums.length; i++) {
//     if (nums[i] === "_") {
//       break
//     }
//     for (let j=i+1; j < nums.length; j++) {
//       if (nums[j] === "_") {
//         break
//       }
//       if (nums[i] === nums[j]) {
//         nums.splice(nums.indexOf(nums[j]), 1)
//         nums.push("_")
//         j--
//       }
//       else {
//         break
//       }
//     }
    
//     count += 1
//   }
//   return count
// };