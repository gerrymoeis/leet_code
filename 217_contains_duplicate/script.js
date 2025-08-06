/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const setNums = new Set();
    for (const num of nums) {
        if (setNums.has(num)) {
            return true;
        }
        setNums.add(num);
    }
    return false;
};

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

const tests = [
    [7,2,3,7],
    [1,2,3,4],
    [1,1,1,3,3,4,3,2,4,2]
]

for (const test of tests) {
    console.log(containsDuplicate(test));
}

// Experiment
// var containsDuplicate = function(nums) {
//     nums.sort((a,b) => a-b);
//     const n = nums.length;
//     const jump = Math.floor(Math.sqrt(n));
//     const setNums = new Set();
//     for (let i=0; i < n; i += jump) {
//         if (setNums.has(nums[i])) {
//             return true;
//         }
//         setNums.add(nums[i]);
//     }
//     return false;
// };

// var containsDuplicate = function(nums) {
//     let dup = 0;
//     for (let i=0; i < nums.length; ++i) {
//         dup ^= nums[i] ^ nums[i-1];
//         console.log("anjay", dup);
//     }
//     // return true ? dup - nums.length < 0 : false;
// };

// Attempt 1
// var containsDuplicate = function(nums) {
//     let dup = nums[0];
//     for (let i=0; i < nums.length; ++i) {
//         dup ^= nums[i];
//     }
//     return true ? dup - nums.length < 0 : false;
// };

// console.log(0 ^ 10)