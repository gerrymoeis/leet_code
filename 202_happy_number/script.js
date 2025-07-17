/**
 * @param {number} n
 * @return {boolean}
 */

var sumOfSquare = function (n) {
    let sum = 0
    while (n > 0) {
      let digit = n % 10
      sum += digit * digit
      n = Math.floor(n / 10)
    }
    return sum
}
 
var isHappy = function(n) {
    if (n === 1 && n === 7) return 1
    else if (n < 10) return false
    
    let happy = n
    while (happy !== 1) {
      if (happy === 85 || happy === 58 || (happy < 10 && happy !== 1 && happy !== 7)) return false
      
      happy = sumOfSquare(happy)
      console.log(happy)
    }
    return happy
};

// let n = 19
// let n = 2
// let n = 98765
let n = 56237823242
console.log(isHappy(n))

// Experiment
// let nums = [8,9]
// let happy = nums.reduce((t,num) => t + num**2, 0)
// console.log(happy)
// console.log(nums[nums[0]])

// Attempt 1
// var isHappy = function(n) {
//     if (n > 1 && n < 10) return false
    
//     let happy = n
//     while (happy !== 1) {
//       let nums = happy.toString().split('').map(num => parseInt(num))
//       happy = nums.reduce((t,num) => t + num**2, 0)
//       console.log(happy)
//     }
//     return happy
// };


// Attempt 2
// var isHappy = function(n) {
//     if (n > 1 && n < 10) return false
    
//     let happy = n
//     while (happy !== 1) {
//       if (happy === 85 || happy === 58) return false
      
//       let nums = happy.toString().split('').map(num => parseInt(num))
//       happy = nums.reduce((t,num) => t + num**2, 0)
//       console.log(happy)
//     }
//     return happy
// };

// Attempt 3
// var isHappy = function(n) {
//     if (n === 1 && n === 7) return 1
//     else if (n < 10) return false
    
//     let happy = n
//     while (happy !== 1) {
//       if (happy === 85 || happy === 58 || (happy < 10 && happy !== 1 && happy !== 7)) return false
      
//       happy = sumOfSquare(happy)
//       console.log(happy)
//     }
//     return happy
// };