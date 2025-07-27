/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    for (let i=1, l=0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i+1]) {
          if ((nums[i] < nums[l] && nums[i] < nums[i+1]) || (nums[i] > nums[l] && nums[i] > nums[i+1])) {
            count++
          }
          
          l=i
        }
    }
    return count;
};

const tests = [
    [2,4,1,1,6,5],
    [6,6,5,5,4,1],
    [47,9,85,61,8,87,15,97,34,73,90,5,38],
    [90, 31, 81, 88, 75, 7, 30, 82, 95, 4, 44, 98, 26, 56, 29, 25, 74, 46, 50, 8, 39, 40, 23, 39, 50, 32, 40, 65, 18, 25, 57, 34, 31, 24, 99, 4, 36, 83, 23, 80],
    [49,16,11,24,82,24,73,61,62,44,25,59,3,57,62,7,38,61,22,92,90,60,28,21,37,54,43,14,3,64,48,51,55,55,58,43,67,46,36,32,78],
    [51,55,55,58,43]
];

for (const test of tests) {
    console.log(countHillValley(test));
}

// Attempt 1 - Failed
// var countHillValley = function(nums) {
//     let count = 0;
//     for (let i=1, j=i+1; j < nums.length; j++) {
//         if (nums[i] > nums[i-1] && nums[i] > nums[j]) {
//             count++
//             i++
//             j = i
//         }
//         else if (nums[i] < nums[i-1] && nums[i] < nums[j]) {
//             count++
//             i++
//             j = i
//         }
//         else if (nums[i] === nums[i-1]) {
//             i++
//         }
//         else if (nums[i] !== nums[i-1] && nums[i] !== nums[j]) {
//           i++
//         }
//     }
//     return count;
// };

// Attempt 2
// var countHillValley = function(nums) {
//     let count = 0;
//     for (let i=1, l=i-1, r=i+1; i < nums.length; i++, l++, r++) {
//         if (nums[i] === nums[r]) {
//             i--;
//             l--;
//         }
//         else if (nums[i] === nums[l]) {
//           r=i+1;
//         }
//         else if (nums[i] > nums[l] && nums[i] > nums[r]) {
//             count++;
//             r=i+1;
//         }
//         else if (nums[i] < nums[l] && nums[i] < nums[r]) {
//             count++;
//             r=i+1;
//         }
//     }
//     return count;
// };