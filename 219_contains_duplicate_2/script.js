/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Both O(n) time and O(n or k) space complexity

var containsNearbyDuplicate = function(nums, k) {
    const mapNums = new Map();
    for (let i=0; i < nums.length; ++i) {
        if (mapNums.has(nums[i])) {
            if (i - mapNums.get(nums[i]) <= k) return true;
        }
        mapNums.set(nums[i], i);
    }
    return false;
};

// Sliding window
var containsNearbyDuplicate = function(nums, k) {
    const window = new Set();
    for (let i=0; i < nums.length; ++i) {
        if (window.has(nums[i])) return true;
        window.add(nums[i]);
        if (window.size > k) {
            window.delete(nums[i - k]); // remove element out of window
        }
    }
    return false;
};
