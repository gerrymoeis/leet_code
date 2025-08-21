/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Both O(n) time and space
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    nums1 = nums1.reduce((map, num) => {
        map.set(num, (map.get(num) ?? 0) + 1);
        return map;
    }, new Map());

    let res = [];
    let i = 0;
    while (nums1.size > 0 && i < nums2.length) {
        if (nums1.has(nums2[i])) {
            res.push(nums2[i]);
            nums1.set(nums2[i], nums1.get(nums2[i]) - 1)
            if (nums1.get(nums2[i]) === 0) nums1.delete(nums2[i]);
        }
        ++i;
    }
    return res;
};

var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    nums1 = nums1.reduce((map, num) => {
        map.set(num, (map.get(num) ?? 0) + 1);
        return map;
    }, new Map());

    let res = [];
    let i = 0;
    for (const num of nums2) {
        if (nums1.has(num)) {
            res.push(num);
            nums1.set(num, nums1.get(num) - 1);
            if (nums1.get(num) === 0) nums1.delete(num);
        }
        if (nums1.size === 0) break;
    }
    return res;
};

// O(n log n) time and O(1) space
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0, j = 0;
    const res = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i++; j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return res;
};

// O(n * m) time and O(1) space
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    const res = [];
    for (let num of nums2) {
        for (let i = 0; i < nums1.length; i++) {
            if (nums1[i] === num) {
                res.push(num);
                nums1[i] = Infinity; // mark as used
                break;
            }
        }
    }
    return res;
};


// Exoeriment
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    nums1 = nums1.reduce((map, num) => {
        map.set(num, (map.get(num) ?? 0) + 1);
        return map;
    }, new Map());

    let res = [];
    let i = 0;
    // for (let i=0; i < nums2.length; ++i) {

    // }
    while (nums1.size > 0 && i < nums2.length) {
        if (nums1.has(nums2[i])) {
            res.push(nums2[i]);
            nums1.set(nums2[i], nums1.get(nums2[i]) - 1)
            if (nums1.get(nums2[i]) === 0) nums1.delete(nums2[i]);
            console.log(nums1);
        }
        ++i;
    }
    return res;
};