/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    let prefSum = 0;
    let subMax = -Infinity;

    const minSoFar = new Array(k).fill(Infinity);
    minSoFar[(k - 1) % k] = 0;

    for (let i = 0; i < nums.length; i++) {
        prefSum += nums[i];
        subMax = Math.max(subMax, prefSum - minSoFar[i % k]);
        minSoFar[i % k] = Math.min(minSoFar[i % k], prefSum);
    }

    return subMax;
};