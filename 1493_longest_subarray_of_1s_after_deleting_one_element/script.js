/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let prev = 0, curr = 0, longest = 0;
    let hasZero = false;
    for (const num of nums) {
        if (num) {
            curr++;
        } else {
            prev = curr;
            curr = 0;
            hasZero = true;
        }
        longest = Math.max(longest, prev + curr);
    }
    if (hasZero) return longest;
    return nums.length - 1;
};