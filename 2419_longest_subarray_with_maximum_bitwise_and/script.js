/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const max = Math.max(...nums);
    let curr_len = 0;
    let max_len = 1;
    for (let i=0; i < nums.length; ++i) {
        if (nums[i] === max) {
            curr_len++;
        }
        else {
          max_len = Math.max(max_len, curr_len);
          curr_len = 0;
        }
    }
    max_len = Math.max(max_len, curr_len);
    return max_len;
};

const tests = [
    [1,2,3,3,2,2],
    [1,2,3,4],
    [378034,378034,378034],
    [2,2,2]
]

for (const test of tests) {
    console.log(longestSubarray(test));
}

// Experiment
// console.log(10000 & 1000)

// var longestSubarray = function(nums) {
//     let max = 0;
//     let maxAnd = 0;
//     let res = [];
//     for (let i=0; i < nums.length; ++i) {
//         if (nums[i] > max) {
//             max = nums[i];
//             maxAnd = max & nums[i];
//         }
//         // if (max & nums[i] >= maxAnd) {
//         //   maxAnd = max & nums[i];
//         // }
//         // console.log(max & nums[i])
//     }
//     return [max, maxAnd];
// };