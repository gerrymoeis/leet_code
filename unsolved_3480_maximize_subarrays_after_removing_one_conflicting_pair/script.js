/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */

// I am writing this code, but i'm not solve it on my own, thanks good person on LeetCode.
// O(n*m) Time, and O(n) Space
var maxSubarrays = function(n, conflictingPairs) {
    const right = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of conflictingPairs) {
        right[Math.max(a, b)].push(Math.min(a, b));
    }
    let count = 0;
    let left = [0,0];
    let bonus = new Array(n + 1).fill(0);

    for (let r=1; r <= n; r++) {
        for (const l of right[r]) {
            if (l > left[0]) {
                left = [l, left[0]];
            }
            else if (l > left[1]) {
                left = [left[0], l];
            }
        }

        count += r - left[0];
        if (left[0] > 0) {
            bonus[left[0]] += left[0] - left[1];
        }
    }
    return count + Math.max(...bonus);
};

// The most Optimal Solution, at least by far. O(n) Time and O(n) Space
const maxSubarrays = (n, conflictingPairs) => {
    for (const pair of conflictingPairs) {
        if (pair[1] < pair[0]) {
            const temp = pair[0];
            pair[0] = pair[1];
            pair[1] = temp;
        }
    }

    conflictingPairs.sort((a, b) => a[1] - b[1]);

    const m = conflictingPairs.length;
    let max1 = 0;
    let max2 = 0;
    let gain = 0;
    let maxGain = 0;
    let totalOccupied = 0;

    for (let i = 0; i < m; i++) {
        const start = conflictingPairs[i][0];
        let base = n + 1 - conflictingPairs[i][1];
        if (i < m - 1) {
            base = conflictingPairs[i + 1][1] - conflictingPairs[i][1];
        }

        if (start > max1) {
            max2 = max1;
            max1 = start;
            gain = 0;
        } else if (start > max2) {
            max2 = start;
        }

        gain += (max1 - max2) * base;
        totalOccupied += max1 * base;

        if (gain > maxGain) {
            maxGain = gain;
        }
    }

    const total = n * (n + 1) / 2;
    return total - totalOccupied + maxGain;
};

// var maxSubarrays = function(n, conflictingPairs) {
//     if (conflictingPairs.length === 0) {
//         return n * (n + 1) / 2;
//     }

//     const boundaries = new Array(n + 1).fill(1);
//     for (const pair of conflictingPairs) {
//         let minPair = Math.min(pair[0], pair[1]);
//         let maxPair = Math.max(pair[0], pair[1]);
//         boundaries[maxPair] = Math.max(boundaries[maxPair], minPair + 1);
//     }

//     let leftValid = 1;
//     let baselineCount = 0;
//     for (let i = 1; i <= n; ++i) {
//         leftValid = Math.max(leftValid, boundaries[i]);
//         baselineCount += i - leftValid + 1;
//     }

//     const pairToIndex = new Map();
//     const adj = Array.from({ length: n + 1 }, () => []);
//     conflictingPairs.forEach((pair, i) => {
//         const u = Math.min(pair[0], pair[1]);
//         const v = Math.max(pair[0], pair[1]);
//         adj[u].push(v);
//         pairToIndex.set(`${u},${v}`, i);
//     });

//     const savings = new Array(conflictingPairs.length).fill(0);

//     let m1 = n + 2;
//     let m2 = n + 2;
//     let m1_contributors = []

//     for (let s = n; s >= 1; s--) {
//         for (const v of adj[s]) {
//             if (v < m1) {
//                 m2 = m1;
//                 m1 = v;
//                 m1_contributors = [s];
//             } else if (v === m1) {
//                 m1_contributors.push(s);
//             } else if (v < m2) {
//                 m2 = v;
//             }
//         }

//         if (m1_contributors.length === 1) {
//             const u = m1_contributors[0];
//             const v = m1;

//             const gain = m2 - m1;
            
//             if (gain > 0) {
//                 const pairIndex = pairToIndex.get(`${u},${v}`);
//                 savings[pairIndex] += gain;
//             }
//         }
//     }

//     const maxSavings = Math.max(0, ...savings);

//     return baselineCount + maxSavings;
// };


// My Code - Correct but Formula False
var maxSubarrays = function(n, conflictingPairs) {
    let maxInvalid = 0;
    let idx = 0;
    for (let i=0; i < conflictingPairs.length; ++i) {
      let [a,b] = conflictingPairs[i];
      //   let invalid = (b-a + a+b) * (a * (n - b + 1));
      //   let invalid = (b-a + a+b) * (a * (n - b + 1));
      //   let invalid = n / (b-a + a+b)
      //   let invalid = (a * (n - b + 1)) + (b * (n - a + 1));
      //   let invalid = Math.abs((a * (n - b + 1)) - (b * (n - a + 1)));
      //   let invalid = n / (b-a + a+b)
      console.log(invalid)
      if (invalid > maxInvalid) {
        maxInvalid = invalid;
        idx = i;
        // [conflictingPairs[i], conflictingPairs[conflictingPairs.length-1]] = [conflictingPairs[conflictingPairs.length-1], conflictingPairs[i]];
      }
    }
    [conflictingPairs[idx], conflictingPairs[conflictingPairs.length-1]] = [conflictingPairs[conflictingPairs.length-1], conflictingPairs[idx]];
    conflictingPairs.pop();
    console.log(conflictingPairs);
    
    const boundaries = new Array(n + 1).fill(0);
    for (const pair of conflictingPairs) {
      let minPair = Math.min(...pair);
      let maxPair = Math.max(...pair);
      boundaries[maxPair] = Math.max(boundaries[maxPair], minPair + 1);
    }
    
    let leftValid = 1;
    let count = 0;
    for (let i = 1; i <= n; ++i) {
      leftValid = Math.max(leftValid, boundaries[i]);
      count += i-leftValid+1;
    }
    
    return count;
};

// Correct but Time Limit
var maxSubarrays = function(n, conflictingPairs) {
    let max = 0;
    for (let i=0; i < conflictingPairs.length; i++) {
        const pairs = conflictingPairs.toSpliced(i, 1);
        const boundaries = new Array(n + 1).fill(0);
        for (const pair of pairs) {
            let minPair = Math.min(...pair);
            let maxPair = Math.max(...pair);
            boundaries[maxPair] = Math.max(boundaries[maxPair], minPair + 1);
        }
        
        let leftValid = 1;
        let count = 0;
        for (let i = 1; i <= n; ++i) {
            leftValid = Math.max(leftValid, boundaries[i]);
            count += i-leftValid+1;
        }
        max = Math.max(max, count);
    }
    
    return max;
};

// Improved Removal Functionality
var maxSubarrays = function(n, conflictingPairs) {
    
    const candidates = new Set();
    let maxSpan = 0;
    let maxImpact = 0;
    
    for (let i = 0; i < conflictingPairs.length; i++) {
        const [a, b] = conflictingPairs[i];
        const minVal = Math.min(a, b);
        const maxVal = Math.max(a, b);
        const span = maxVal - minVal;
        const impact = span * Math.min(minVal, n - maxVal + 1);
        
        if (span > maxSpan) {
            maxSpan = span;
            candidates.clear();
            candidates.add(i);
        } else if (span === maxSpan) {
            candidates.add(i);
        }
        
        if (impact > maxImpact) {
            maxImpact = impact;
            candidates.add(i);
        }
        
        if (minVal <= 3 || maxVal >= n - 2) candidates.add(i);
    }
    
    const checkIndices = candidates.size > 0 ? Array.from(candidates) : 
                        Array.from({length: Math.min(5, conflictingPairs.length)}, (_, i) => i);

    let max = 0;
    for (const i of checkIndices) {
        const pairs = conflictingPairs.toSpliced(i, 1);
        const boundaries = new Array(n + 1).fill(0);
        for (const pair of pairs) {
            let minPair = Math.min(...pair);
            let maxPair = Math.max(...pair);
            boundaries[maxPair] = Math.max(boundaries[maxPair], minPair + 1);
        }
        
        let leftValid = 1;
        let count = 0;
        for (let j = 1; j <= n; ++j) {
            leftValid = Math.max(leftValid, boundaries[j]);
            count += j-leftValid+1;
        }
        max = Math.max(max, count);
    }
    
    return max;
};

// Almost, this is very optimal but still false
/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
var maxSubarrays = function(n, conflictingPairs) {
    const candidates = [];
    
    for (let i = 0; i < conflictingPairs.length; i++) {
        const [a, b] = conflictingPairs[i];
        const minVal = Math.min(a, b);
        const maxVal = Math.max(a, b);
        const span = maxVal - minVal;
        const centerDist = Math.abs((minVal + maxVal) / 2 - (n + 1) / 2);
        const score = span * 2 + (n - centerDist);
        
        candidates.push({idx: i, score});
    }
    
    candidates.sort((a, b) => b.score - a.score);
    const checkIndices = candidates.slice(0, Math.min(6, conflictingPairs.length)).map(c => c.idx);

    let max = 0;
    for (const removeIdx of checkIndices) {
        const boundaries = new Array(n + 1).fill(0);
        for (let i = 0; i < conflictingPairs.length; i++) {
            if (i === removeIdx) continue;
            const pair = conflictingPairs[i];
            let minPair = Math.min(...pair);
            let maxPair = Math.max(...pair);
            boundaries[maxPair] = Math.max(boundaries[maxPair], minPair + 1);
        }
        
        let leftValid = 1;
        let count = 0;
        for (let j = 1; j <= n; ++j) {
            leftValid = Math.max(leftValid, boundaries[j]);
            count += j-leftValid+1;
        }
        max = Math.max(max, count);
    }
    
    return max;
};

// Improve My Code
// var maxSubarrays = function(n, conflictingPairs) {
//     if (conflictingPairs.length === 0) return n * (n + 1) / 2;
    
//     const pairsByMax = new Map();
//     for (let i = 0; i < conflictingPairs.length; i++) {
//         const pair = conflictingPairs[i];
//         const minVal = Math.min(...pair);
//         const maxVal = Math.max(...pair);
        
//         if (!pairsByMax.has(maxVal)) {
//             pairsByMax.set(maxVal, []);
//         }
//         pairsByMax.get(maxVal).push({ min: minVal, max: maxVal, index: i });
//     }
    
//     const baseBoundaries = new Array(n + 1).fill(0);
//     for (const pair of conflictingPairs) {
//         const minVal = Math.min(...pair);
//         const maxVal = Math.max(...pair);
//         baseBoundaries[maxVal] = Math.max(baseBoundaries[maxVal], minVal + 1);
//     }
    
//     const countValidSubarrays = (boundaries) => {
//         let leftValid = 1;
//         let count = 0;
//         for (let i = 1; i <= n; ++i) {
//             leftValid = Math.max(leftValid, boundaries[i]);
//             count += i - leftValid + 1;
//         }
//         return count;
//     };
    
//     let maxCount = 0;
//     for (let removeIdx = 0; removeIdx < conflictingPairs.length; removeIdx++) {
//         const removedPair = conflictingPairs[removeIdx];
//         const removedMin = Math.min(...removedPair);
//         const removedMax = Math.max(...removedPair);

//         const newBoundaries = [...baseBoundaries];

//         let newBoundaryValue = 0;
//         if (pairsByMax.has(removedMax)) {
//             for (const pairInfo of pairsByMax.get(removedMax)) {
//                 if (pairInfo.index !== removeIdx) {
//                     newBoundaryValue = Math.max(newBoundaryValue, pairInfo.min + 1);
//                 }
//             }
//         }
//         newBoundaries[removedMax] = newBoundaryValue;
        
//         const count = countValidSubarrays(newBoundaries);
//         maxCount = Math.max(maxCount, count);
//     }
    
//     return maxCount;
// };

// var maxSubarrays = function(n, conflictingPairs) {
//     let maxInvalid = 0;
//     let idx = 0;
//     conflictingPairs.sort((a,b) => a[0] - b[0]);
//     for (let i=0; i < conflictingPairs.length; ++i) {
//       let [a,b] = conflictingPairs[i];
//       let invalid = a * (n - b + 1)
//       if (invalid > maxInvalid) {
//         maxInvalid = invalid;
//         idx = i;
//         [conflictingPairs[i], conflictingPairs[conflictingPairs.length-1]] = [conflictingPairs[conflictingPairs.length-1], conflictingPairs[i]];
//       }
//     }
//     // [conflictingPairs[idx], conflictingPairs[conflictingPairs.length-1]] = [conflictingPairs[conflictingPairs.length-1], conflictingPairs[idx]];
//     conflictingPairs.pop();
//     console.log(conflictingPairs);
    
//     const boundaries = new Array(n + 1).fill(0);
//     for (const pair of conflictingPairs) {
//         let minPair = Math.min(...pair);
//         let maxPair = Math.max(...pair);
//         boundaries[maxPair] = Math.max(boundaries[maxPair], minPair + 1);
//     }
    
//     let leftValid = 1;
//     let count = 0;
//     for (let i = 1; i <= n; ++i) {
//         leftValid = Math.max(leftValid, boundaries[i]);
//         count += i-leftValid+1;
//     }

//     return count;
// };

const tests = [
    // [10, [[10,5],[3,8]]],
    [4, [[2,3],[1,4]]],
    // [5, [[1,2],[2,5],[3,5]]],
    // [12, [[6,7], [1,2], [3,8], [10,11]]],
    // [2, [[1,2]]],
    // [3, [[1,2],[2,3]]],
    // [4, [[1,2],[2,3],[3,4]]]
]

for (const test of tests) {
    console.log(maxSubarrays(...test))
}

// Visual
// Option 1: Remove [1,4]
// Subarrays can't have [2,3] appear together
// Subarrays can be form using [1,2,3,4] 1 to n but without [2,3]
// [1], [2], [3], [4], [1,2], [3,4] (Total 6)
// Option 2: Remove [2,3], therefore [1,4] can't appear together
// [1], [2], [3], [4], [1,2], [2,3], [3,4], [1,2,3], [2,3,4] (Total 9) return 9

// Formula for getting the correct choosen remove. a * (n - b + 1)

// Experiment
// var maxSubarrays = function(n, conflictingPairs) {
//     let arr = []
//     for (pair of conflictingPairs) {
//       let [a, b] = pair
//       let totalInvalid = a * (n - b + 1)
//       arr.push(totalInvalid)
//     }
//     return arr
// };

// Attempt 1
// var maxSubarrays = function(n, conflictingPairs) {
//     let maxInvalid = 0;
//     for (let i=0; i < conflictingPairs.length; ++i) {
//       let [a,b] = conflictingPairs[i];
//       let invalid = a * (n - b + 1)
//       if (invalid > maxInvalid) {
//         maxInvalid = invalid;
//         [conflictingPairs[i], conflictingPairs[conflictingPairs.length-1]] = [conflictingPairs[conflictingPairs.length-1], conflictingPairs[i]];
//       }
//     }
//     conflictingPairs.pop();
    
//     let count = 0;
//     for (let i=0; i < n; ++i) {
//       for (const pair of conflictingPairs) {
//         if (i <= Math.min(...pair)) {
//           count += i
//         }
//         else if (i >= Math.max(pair)) {
//           count -= Math.min(...pair)
//         }
//       }
//     }
    
//     return count;
// };

// Attempt 2
// var maxSubarrays = function(n, conflictingPairs) {
//     let maxInvalid = 0;
//     for (let i=0; i < conflictingPairs.length; ++i) {
//       let [a,b] = conflictingPairs[i];
//       let invalid = a * (n - b + 1)
//       if (invalid > maxInvalid) {
//         maxInvalid = invalid;
//         [conflictingPairs[i], conflictingPairs[conflictingPairs.length-1]] = [conflictingPairs[conflictingPairs.length-1], conflictingPairs[i]];
//       }
//     }
//     conflictingPairs.pop();
//     console.log(conflictingPairs)
    
//     let count = 0;
//     for (let i=1; i <= n; ++i) {
//       count += i
//       for (const pair of conflictingPairs) {
//         if (i === Math.max(...pair)) {
//           count -= Math.min(...pair)
//         }
//       }
//     }
    
//     return count;
// };

// Attempt 3
// var maxSubarrays = function(n, conflictingPairs) {
//     let maxInvalid = 0;
//     for (let i=0; i < conflictingPairs.length; ++i) {
//       let [a,b] = conflictingPairs[i];
//       let invalid = a * (n - b + 1)
//       if (invalid > maxInvalid) {
//         maxInvalid = invalid;
//         [conflictingPairs[i], conflictingPairs[conflictingPairs.length-1]] = [conflictingPairs[conflictingPairs.length-1], conflictingPairs[i]];
//       }
//     }
//     conflictingPairs.pop();
//     console.log(conflictingPairs)
    
//     let count = 0;
//     for (let i = 1; i <= n; i++) {
//       // For ending position i, count valid starting positions
//       let validStarts = 0;
      
//       for (let j = 1; j <= i; j++) {
//           // Check if subarray [j, i] is valid (doesn't contain any conflicting pair)
//           let isValid = true;
          
//           for (const pair of conflictingPairs) {
//               let minPair = Math.min(...pair);
//               let maxPair = Math.max(...pair);
              
//               // Subarray [j, i] contains both elements of pair if j <= minPair and i >= maxPair
//               if (j <= minPair && i >= maxPair) {
//                   isValid = false;
//                   break;
//               }
//           }
          
//           if (isValid) {
//               validStarts++;
//           }
//       }
      
//       count += validStarts;
//     }
    
//     return count;
// };


// Attempt 4
// var maxSubarrays = function(n, conflictingPairs) {
//     let maxInvalid = 0;
//     for (let i=0; i < conflictingPairs.length; ++i) {
//       let [a,b] = conflictingPairs[i];
//       let invalid = a * (n - b + 1)
//       if (invalid > maxInvalid) {
//         maxInvalid = invalid;
//         [conflictingPairs[i], conflictingPairs[conflictingPairs.length-1]] = [conflictingPairs[conflictingPairs.length-1], conflictingPairs[i]];
//       }
//     }
//     conflictingPairs.pop();
//     console.log(conflictingPairs)
    
//     let count = 0;
//     for (let i=1; i <= n; ++i) {
//       count += i
//       for (const pair of conflictingPairs) {
//         if (i === Math.max(...pair)) {
//           count -= Math.min(...pair)
//         }
//       }
//     }
    
//     return count;
// };

// Attempt 5
// var maxSubarrays = function(n, conflictingPairs) {
//     let maxInvalid = 0;
//     for (let i=0; i < conflictingPairs.length; ++i) {
//       let [a,b] = conflictingPairs[i];
//       let invalid = a * (n - b + 1);
//       if (invalid > maxInvalid) {
//         maxInvalid = invalid;
//         [conflictingPairs[i], conflictingPairs[conflictingPairs.length-1]] = [conflictingPairs[conflictingPairs.length-1], conflictingPairs[i]];
//       }
//     }
//     conflictingPairs.pop();
    
//     let count = 0;
//     for (let i = 1; i <= n; ++i) {
//       let leftValid = 1;
//       for (const pair of conflictingPairs) {
//         let minPair = Math.min(...pair);
//         let maxPair = Math.max(...pair);
//         if (i >= maxPair) {
//           leftValid = Math.max(leftValid, minPair+1);
//         }
//       }
//       count += i-leftValid+1;
//     }
    
//     return count;
// };