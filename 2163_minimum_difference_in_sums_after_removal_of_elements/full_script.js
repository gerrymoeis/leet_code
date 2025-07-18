/**
 * @param {number[]} nums
 * @return {number}
 */

// function swapMaxHeap(nums, i, maxHeap, currentSum) {
//   if (nums[i] < maxHeap[0]) {
//     currentSum -= maxHeap.at(-1)
//     maxHeap[maxHeap.length-1] = nums[i]
//     currentSum += nums[i]
//   }
// }

var minimumDifference = function(nums) {
    let n = nums.length / 3
    
    let min = Infinity
    let leftMinSums = [], rightMaxSums = []
    let heap = [], currentSum = 0
    
    for (let i=0; i < nums.length; i++) {
      if (heap.length < n) {
        heap.push(nums[i])
        currentSum += nums[i]
        
        if (heap.length === n) {
          heap.sort((a,b) => a-b)
        }
      }
      else {
        if (nums[i] < heap.at(-1)) {
          currentSum -= heap.at(-1)
          heap[heap.length-1] = nums[i]
          currentSum += nums[i]
          heap.sort((a,b) => a-b)
        }
      }
      
      if (heap.length === n) {
        leftMinSums[i] = currentSum
      }
    }
    
    heap = []
    currentSum = 0

    for (let i=nums.length-1; i >= 0; i--) {
      if (heap.length < n) {
        heap.push(nums[i])
        currentSum += nums[i]
        
        if (heap.length === n) {
          heap.sort((a,b) => a-b)
        }
      }
      else {
        if (nums[i] > heap.at(0)) {
          currentSum -= heap.at(0)
          heap[0] = nums[i]
          currentSum += nums[i]
          heap.sort((a,b) => a-b)
        }
      }
      
      if (heap.length === n) {
        rightMaxSums[i] = currentSum
      }
    }
    
    for (let i=n-1; i < n*2; i++) {
      let left = leftMinSums[i]
      let right = rightMaxSums[i+1]
      
      min = Math.min(min, left-right)
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

// Attempt 1 - Success, But not optimal
// var minimumDifference = function(nums) {
//     let n = nums.length / 3

//     let min = 100000000000
//     for (let i=n; i <= n*2; i++) {
//       let left = nums.slice(0, i)
//       let right = nums.slice(i)

//       for (let i=0; i < n; i++) {
//         if (left.length > n) {
//           left.splice(left.indexOf(Math.max(...left)),1)
//         }
//         if (right.length > n) {
//           right.splice(right.indexOf(Math.min(...right)),1)
//         }
//       }
//       min = Math.min(min, left.reduce((a,b) => a+b, 0) - right.reduce((a,b) => a+b, 0))
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

// var minimumDifference = function(nums) {
//     let n = nums.length / 3
    
//     let min = 100000000
//     for (let i=n; i <= n*2; i++) {
//       let left = 0
//       let right = 0
      
//       console.log("Anjay", i)
//       for (let j=0; j < i; j++) {
//         console.log(j, nums[j])
//         // console.log(j, nums[j], nums[i+j])
//       }
      
//       min = Math.min(min, left-right)
//       // console.log(min, left, right)
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



// Experiment 2
// var minimumDifference = function(nums) {
//     let n = nums.length / 3
    
//     let min = 100000000
//     for (let i=n; i <= n*2; i++) {
//       let left = 0
//       let right = 0
      
//       let x = nums[0]
      
//       console.log("Anjay", i)
//       for (let j=i-n; j < i; j++) {
//         left += nums[j]
//         right += nums[n+j]
//         // if (nums[j] > x){
//         //   left += x
//         // }
//         // else {
//         //   left += nums[j]
//         //   x = nums[j]
//         // }
//         console.log(j, nums[j], nums[n+j])
//       }
      
//       console.log("left", left, "right", right)
//       min = Math.min(min, left-right)
//     }
    
//     return min
// };