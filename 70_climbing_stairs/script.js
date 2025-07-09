/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n
    let step1 = 1
    let step2 = 2
    let count = 0
    
    for (let i=3; i <= n; i++) {
      count = step1 + step2
      step1 = step2
      step2 = count
    }
    return count
};

const n = [1,2,3,4,5, 6, 7, 45,133, 245, 32, 242, 235, 23, 2343]
for (i in n) {
    console.log(climbStairs(n[i]))
}

// [1, 2, 3, 5, 8, 13, 21]

// 1
// 1

// 2
// 1 1
// 2

// 3
// 1 1 1
// 1 2
// 2 1

// 4
// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 2

// 5
// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 2 2 1
// 2 1 2
// 1 2 2

// Attempt 1 - Success
// var climbStairs = function(n) {
//     if (n <= 2) return n
//     a = 0
//     b = 1
//     count = 0
    
//     for (let i=0; i < n; i++) {
//       count = a+b
//       a = b
//       b = count
//     }
//     return count
// }; 

// Experiment
// var climbStairs = function(n) {
//     if (n <= 2) return n
//     a = 0
//     b = 1
//     count = 0
    
//     for (let i=0; i < n; i++) {
//       count = a+b
//       a = b
//       b = count
//     }
    
//     // total = 0
//     // for (let i=count; i <= n; i++) {
//     //   count += i
//     //   total += count
//     // }
//     // while (n > 0) {
//     //   next_count += count
//     //   n--
//     // }
//     return count
    
//     // count = 0
//     // while (n > 0) {
//     //     if (n % 1 == 0 || n % 2 == 0) {
//     //       count++
//     //     }
//     //     n--
//     // }
//     // return count
// };