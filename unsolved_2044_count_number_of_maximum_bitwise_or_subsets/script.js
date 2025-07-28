/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOr = nums[0];
    for (let i=1; i < nums.length; i++) {
        maxOr |= nums[i];
    }
    
    const dp = new Array(maxOr + 1).fill(0);
    dp[0] = 1;
    
    for (const num of nums) {
        for (let mask = maxOr; mask >= 0; mask--) {
            if (dp[mask] > 0) {
                dp[mask | num] += dp[mask];
            }
        }
    }
    
    return dp[maxOr];
};

const tests = [
    [3,1],
    [2,2,2],
    [3,2,1,5]
]

for (const test of tests) {
    console.log(countMaxOrSubsets(test))
}

// Attempt 1 - Failed
// var countMaxOrSubsets = function(nums) {
//     let total = nums[0];
//     for (let i=1; i < nums.length; i++) {
//         total |= nums[i];
//     }
    
//     console.log(total);
//     let count = 0;
//     for (let i=0; i < nums.length; i++) {
//         let sum = nums[i]
//         for (let j=i; j < nums.length; j++) {
//           // if ((nums[i] | nums[j]) === total) {
//           //     console.log(nums[i], nums[j], nums[i] | nums[j], total);
//           //     count++;
//           // }
//           sum |= nums[j];
//           console.log(nums[i], nums[j], sum)
//           if (sum === total) {
//               // console.log(nums[i], nums[j], sum, total);
//               count++;
//           }
//         }
//     }
    
//     return count
// };