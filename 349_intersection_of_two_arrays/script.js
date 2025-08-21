/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const res = new Set();
    if (nums1.length <= nums2.length) {
        nums2 = new Set(nums2);
        for (const num of nums1) {
            if (nums2.has(num)) {
                res.add(num);
            }
        }
    } else {
        nums1 = new Set(nums1);
        for (const num of nums2) {
            if (nums1.has(num)) {
                res.add(num);
            }
        }
    }
    return [...res]
};

var intersection = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    const res = new Set();
    nums1 = new Set(nums1);
    for (const num of nums2) {
        if (nums1.has(num)) {
            res.add(num);
        }
    }
    return [...res]
}

// wrong / failed
var intersection = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    nums1 = nums1.sort();
    nums2 = nums2.sort();
    let i = 0, j = 0, k = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            if (k === 0 || nums1[k-1] !== nums1[i]) {
                nums1[k++] = nums1[i];
            }
            ++i; ++j;
        } else if (nums1[i] < nums1[j]) {
            ++i;
        } else {
            ++j;
        }
    }
    return nums1.slice(0, k);
}

// Best solution
var intersection = function(nums1, nums2) {
    const MAX = 1000;
    const seen = new Uint8Array(MAX + 1);
    const used = new Uint8Array(MAX + 1);
    const res = [];

    for (const x of nums1) seen[x] = 1;
    for (const y of nums2) {
        if (seen[y] && !used[y]) {
            res.push(y);
            used[y] = 1;
        }
    }
    return res;
};