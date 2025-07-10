/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (m <= 0){
      for (j in nums2) {
        nums1[j] = nums2[j]
      }
    }
    for (let i=0; i < m; i++) {
      for (j in nums2) {
        if (nums1[i] > nums2[j]) {
          nums1[i+1] = nums1[i]
          nums1[i] = nums2[j]
          break
        }
        else {
          nums1[i+m+1] = nums2[i+1]
          break
        }
      }
    }
    console.log(nums1)
};

// Solution - Success
var merge = function(nums1, m, nums2, n) {
    if (n === 0) return
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i]
        }
        return
    }
    
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    while (j >= 0) {
        if (i < 0 || nums1[i] <= nums2[j]) {
            nums1[k--] = nums2[j--]
        } else {
            nums1[k--] = nums1[i--]
        }
    }
};

// nums1 = [1], m = 1, nums2 = [], n = 0
nums1 = [0], m = 0, nums2 = [1], n = 1

// const nums1 = [1,2,3,0,0,0]
// const m = 3
// const nums2 = [2,5,6]
// const n = 3
merge(nums1, m, nums2, n)

var merge = function(nums1, m, nums2, n) {
    // Early termination: if nums2 is empty, nothing to merge
    if (n === 0) return;
    
    // If nums1 is empty, just copy nums2 directly
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }
    
    // Three-pointer approach working backwards
    let i = m - 1;      // Last valid element in nums1
    let j = n - 1;      // Last element in nums2
    let k = m + n - 1;  // Last position in nums1
    
    // Main merge loop - work backwards to avoid overwriting
    while (j >= 0) {
        // If nums1 is exhausted OR nums2[j] is larger/equal
        if (i < 0 || nums1[i] <= nums2[j]) {
            nums1[k--] = nums2[j--];
        } else {
            nums1[k--] = nums1[i--];
        }
    }
    
    // No need to copy remaining nums1 elements - they're already in place
};

// Alternative version with even fewer operations
var mergeOptimized = function(nums1, m, nums2, n) {
    if (n === 0) return;
    
    if (m === 0) {
        // Use array method for bulk copy when nums1 is empty
        nums1.splice(0, n, ...nums2);
        return;
    }
    
    // Single loop with combined conditions
    let i = m - 1, j = n - 1, k = m + n - 1;
    
    while (j >= 0) {
        nums1[k--] = (i >= 0 && nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
    }
};

// Experiment
// var merge = function(nums1, m, nums2, n) {
//     for (let i=0; i < m; i++) {
//       console.log("loop", i)
//       for (j in nums2) {
//         // console.log(nums1[i], nums2[j])
//         // console.log("anjay", i, nums1[i+m])
//         if (nums1[i] > nums2[j]) {
//           nums1[i+1] = nums1[i]
//           nums1[i] = nums2[j]
//           break
//         }
//         else {
//           nums1[i+m+1] = nums2[i+1]
//           console.log("Anjay")
//           break
//         }
//         // else {
//         //   nums1[i+m] = nums2[j]
//         //   break
//         // }
//       }
//     }
//     console.log(nums1)
// };

// Attempt 1 - Failed
// var merge = function(nums1, m, nums2, n) {
//     if (m <= 0){
//       for (j in nums2) {
//         nums1[j] = nums2[j]
//       }
//     }
//     for (let i=0; i < m; i++) {
//       for (j in nums2) {
//         if (nums1[i] > nums2[j]) {
//           nums1[i+1] = nums1[i]
//           nums1[i] = nums2[j]
//           break
//         }
//         else {
//           nums1[i+m+1] = nums2[i+1]
//           break
//         }
//       }
//     }
//     console.log(nums1)
// };