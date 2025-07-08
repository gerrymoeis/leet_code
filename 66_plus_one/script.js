/**
  * @param {number[]} digits
  * @return {number[]}
*/

var plusOne = function(digits) {
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry
    if (sum === 10) {
      digits[i] = 0
      carry = 1
    } else {
      digits[i] = sum
      carry = 0
      break
    }
  }
  if (carry === 1) {
    digits.unshift(1)
  }
  return digits
};

// var plusOne = function(digits) {
//   for (let i=digits.length-1; i >= 0; i--) {
//     if (digits[i] === 9) {
//       digits[i] = 0
//     }
//     else {
//       digits[i] += 1
//       break
//     }
//   }
//   return digits
// };

// const digits = [4,9,9,9]
// const digits = [1,2,3]
const digits = [9,9,9,9]
// const digits = [9]
console.log(plusOne(digits))


// Experiment
// var plusOne = function(digits) {
  
  
//   for (let i=digits.length-1; i >= 0; i--) {
//     if (digits[i] === 9) {
//       digits[i] = 0
//       digits[i-1] += 1
//     }
//     else {
//       digits[i] += 1
//       break
//     }
//   }
//   return digits
  
//   if (digits[digits.length - 1] === 9) {
//     digits[digits.length - 1] = 0
//   }
//   digits[digits.length - 1] += 1
//   return digits
// };

// Experiment 2
// var plusOne = function(digits) {
//   let n = 1
//   let d = []
//   for (let i=0; i < digits.length; i++) {
//     n += digits[digits.length-i-1] * (10**i)
//     console.log(n / 10**i)
//     d.unshift(Math.floor(n / 10**i))
//   }
//   return n.toString().split("").map(x => parseInt(x, 10))
  
//   // let n = 1
//   // for (i in digits) {
//   //   n += digits[i] * (10 ** (digits.length - i - 1))
//   // }
//   // return 
// };

// Failed attempt
// var plusOne = function(digits) {
//   let n = 1
//   for (let i=0; i < digits.length; i++) {
//     n += digits[digits.length-i-1] * (10**i)
//   }
//   return n.toString().split("").map(d => parseInt(d, 10))
// };