/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    for (let i=1, j=i+1; j < nums.length; j++) {
        if (nums[i] > nums[i-1] && nums[i] > nums[j]) {
            count++
            i++
            j = i
        }
        else if (nums[i] < nums[i-1] && nums[i] < nums[j]) {
            count++
            i++
            j = i
        }
        else if (nums[i] === nums[i-1]) {
            i++
        }
        else if (nums[i] !== nums[i-1] && nums[i] !== nums[j]) {
          i++
        }
    }
    return count;
};

const tests = [
    [2,4,1,1,6,5],
    [6,6,5,5,4,1],
    [47,9,85,61,8,87,15,97,34,73,90,5,38],
    [90, 31, 81, 88, 75, 7, 30, 82, 95, 4, 44, 98, 26, 56, 29, 25, 74, 46, 50, 8, 39, 40, 23, 39, 50, 32, 40, 65, 18, 25, 57, 34, 31, 24, 99, 4, 36, 83, 23, 80]
];

for (const test of tests) {
    console.log(countHillValley(test));
}