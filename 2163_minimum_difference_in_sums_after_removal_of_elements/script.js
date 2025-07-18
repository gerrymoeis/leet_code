/**
 * @param {number[]} nums
 * @return {number}
 */
// First Attempt Successful, but inefficient
var minimumDifference = function(nums) {
    let n = nums.length / 3
    
    let min = 100000000000
    for (let i=n; i <= n*2; i++) {
      let left = nums.slice(0, i)
      let right = nums.slice(i)
      
      for (let i=0; i < n; i++) {
        if (left.length > n) {
          left.splice(left.indexOf(Math.max(...left)),1)
        }
        if (right.length > n) {
          right.splice(right.indexOf(Math.min(...right)),1)
        }
      }
      min = Math.min(min, left.reduce((a,b) => a+b, 0) - right.reduce((a,b) => a+b, 0))
    }
    
    return min
};

let a = minimumDifference([3,1,2])
let b = minimumDifference([7,9,5,8,1,3])
let c = minimumDifference([1, 5, 2, 9, 8, 3, 7, 6, 4])
let d = minimumDifference([12, 3, 7, 9, 1, 15, 4, 8, 11])
let e = minimumDifference([10,11,12,1,2,3])
console.log(a,b,c,d,e)
// console.log(e)


// Attempt 2 - Success, but still not optimal, it's still using just a sorted array and not a real heap
// var minimumDifference = function(nums) {
//     let n = nums.length / 3
    
//     let min = Infinity
//     let leftMinSums = [], rightMaxSums = []
//     let maxHeap = [], currentSum = 0
    
//     for (let i=0; i < nums.length; i++) {
//       if (maxHeap.length < n) {
//         maxHeap[i] = nums[i]
//         currentSum += nums[i]
        
//         if (maxHeap.length === n) {
//           maxHeap.sort((a,b) => a-b)
//         }
//       }
//       else {
//         if (nums[i] < maxHeap.at(-1)) {
//           currentSum -= maxHeap.at(-1)
//           maxHeap[maxHeap.length-1] = nums[i]
//           currentSum += nums[i]
//           maxHeap.sort((a,b) => a-b)
//         }
//       }
      
//       if (maxHeap.length === n) {
//         leftMinSums[i] = currentSum
//       }
//     }
    
//     for (let i=nums.length-1; i >= 0; i--) {
//       if (nums[i] > maxHeap.at(0)) {
//         currentSum -= maxHeap.at(0)
//         maxHeap[0] = nums[i]
//         currentSum += nums[i]
//         maxHeap.sort((a,b) => a-b)
//       }
      
//       if (maxHeap.length === n) {
//         rightMaxSums[i] = currentSum
//       }
//     }
    
//     for (let i=n-1; i < n*2; i++) {
//       let left = leftMinSums[i]
//       let right = rightMaxSums[i+1]
      
//       min = Math.min(min, left-right)
//     }
    
//     return min
// };

// Attempt 3 - Success, more robust than attempt 2, but still not optimal, it's still using just a sorted array and not a real heap
// var minimumDifference = function(nums) {
//     let n = nums.length / 3
    
//     let min = Infinity
//     let leftMinSums = [], rightMaxSums = []
//     let heap = [], currentSum = 0
    
//     for (let i=0; i < nums.length; i++) {
//       if (heap.length < n) {
//         heap.push(nums[i])
//         currentSum += nums[i]
        
//         if (heap.length === n) {
//           heap.sort((a,b) => a-b)
//         }
//       }
//       else {
//         if (nums[i] < heap.at(-1)) {
//           currentSum -= heap.at(-1)
//           heap[heap.length-1] = nums[i]
//           currentSum += nums[i]
//           heap.sort((a,b) => a-b)
//         }
//       }
      
//       if (heap.length === n) {
//         leftMinSums[i] = currentSum
//       }
      
//       console.log(heap, currentSum, leftMinSums)
//     }
    
//     heap = []
//     currentSum = 0
//     console.log()

//     for (let i=nums.length-1; i >= 0; i--) {
//       if (heap.length < n) {
//         heap.push(nums[i])
//         currentSum += nums[i]
        
//         if (heap.length === n) {
//           heap.sort((a,b) => a-b)
//         }
//       }
//       else {
//         if (nums[i] > heap.at(0)) {
//           currentSum -= heap.at(0)
//           heap[0] = nums[i]
//           currentSum += nums[i]
//           heap.sort((a,b) => a-b)
//         }
//       }
      
//       if (heap.length === n) {
//         rightMaxSums[i] = currentSum
//       }
      
//       console.log(heap, currentSum, rightMaxSums)
//     }
    
//     for (let i=n-1; i < n*2; i++) {
//       let left = leftMinSums[i]
//       let right = rightMaxSums[i+1]
      
//       min = Math.min(min, left-right)
//     }
    
//     return min
// };


// Experiment
// var minimumDifference = function(nums) {
//     let n = nums.length / 3
    
//     let min = 0
//     for (let num of nums) {
      
//       const dp = Array(n*2).fill(0)
//       min = Math.min(min, ...dp)
//     }
    
//     return min
// };

// Manual Calculations
// [3,1,2]
// [1,2]
// 1 - 2 = -1

// [7,9,5,8,1,3]
// [7,5,8,3]
// 12 - 11 = 1

// [1, 5, 2, 9, 8, 3, 7, 6, 4]
// [1, 5, 2, 9, 8, 7]
// 8 - 24 = -16

// [12, 3, 7, 9, 1, 15, 4, 8, 11]
// [3,7,1,15,8,11]
// 11 - 34 = -23

// [10,11,12,1,2,3]
// [10,11,12,3]
// 21 - 15 = 6