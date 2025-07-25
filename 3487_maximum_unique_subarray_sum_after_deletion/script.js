/**
 * @param {number[]} nums
 * @return {number}
 */
// My Code Solution O(n) Time and Space
var maxSum = function(nums) {
    let setNums = new Set()
    let total = 0
    let max = nums[nums.length-1]
    for (let i=nums.length-1; i >= 0; i--) {
      if (!setNums.has(nums[i])) {
        setNums.add(nums[i])
        if (max + nums[i] < max) {
          max = Math.max(max, nums[i])
        }
        else {
          total += nums[i]
          max = Math.max(max, total)
        }
      }
    }
    return max
};

// AI Solution O(n square) Time and O(n) space
var maxSum = function(nums) {
    let max = Math.max(...nums);
    
    for (let i = 0; i < nums.length; i++) {
        let seen = new Set();
        let currentSum = 0;
        
        for (let j = i; j < nums.length; j++) {
            if (seen.has(nums[j])) break;
            
            seen.add(nums[j]);
            currentSum += nums[j];
            max = Math.max(max, currentSum);
        }
    }
    
    return max;
};

// LeetCode Clever Solution
// var maxSum = function(nums) {
//     if(Math.max(...nums)<=0) return Math.max(...nums)
//     const set = new Set()
//     let sum=0;
//     for(let i=0;i<nums.length;i++){
//         if(!set.has(nums[i]) && nums[i]>0){
//             set.add(nums[i])
//             sum+=nums[i]
//         }
//     }
//     return sum
// };

const tests = [
    [1,2,3,4,5],
    [1,1,0,1,1],
    [1,2,-1,-2,1,0,-1],
    [1],
    [-100,-1,0,-90,-80],
    [-100],
    [-17,-15],
    [-2,-1,-5,-100],
    [5, -10, 3, 4]
]

for (const test of tests) {
    console.log(maxSum(test))
}

// Experiment
// var maxSum = function(nums) {
//     let setNums = new Set(nums)
//     let max = 0
//     // let stack = []
//     for (let i=0; i < nums.length; i++) {
//         // if (nums[i] === stack[stack.length-1])
//         // stack.push(nums[i])
//     }
//     return max
// };

// Attempt 1
// var maxSum = function(nums) {
//     let setNums = new Set()
//     let total = 0
//     for (let i=nums.length-1; i >= 0; i--) {
//       if (setNums.has(nums[i]) || nums[i] <= 0) {
//         nums.pop()
//       }
//       else {
//         setNums.add(nums[i])
//         total += nums[i]
//       }
//     }
//     return total
// };

// Attempt 2
// var maxSum = function(nums) {
//     let setNums = new Set()
//     let total = 0
//     let max = nums[nums.length-1]
//     for (let i=nums.length-1; i >= 0; i--) {
//       if (setNums.has(nums[i])) {
//         nums.pop()
//       }
//       else {
//         setNums.add(nums[i])
//         if (max + nums[i] < max) {
//           continue
//         }
//         total += nums[i]
//         max = Math.max(max, total)
//       }
//     }
//     return max
// };