/**
 * @param {number} x
 * @return {boolean}
 */

 var isPalindrome = function(x) {
    num = x
    y = 0
    
    while (num > 0) {
      y = (y * 10) + num % 10
      num = Math.floor(num / 10)
    }
    
    return x === y
};

x = 11
console.log(isPalindrome(x))

x = 121
console.log(isPalindrome(x))

// Solution 1 - with string converter
// var isPalindrome = function(x) {
//     let s = ""
   
//     for (let i=x.toString().length - 1; i > -1; i--) {
//       s += x.toString()[i]
//     }
//     return x.toString() === s
// };

// Solution 2 - still using toString()
// var isPalindrome = function(x) {
//     num = x
//     y = 0
    
//     while (num > 0) {
//       y += num % 10 * (10 ** (num.toString().length - 1))
//       num = Math.floor(num / 10)
//     }
    
//     return x === y
// };