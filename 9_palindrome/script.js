/**
 * @param {number} x
 * @return {boolean}
 */

// Solution 1 - with string converter
var isPalindrome = function(x) {
    let s = ""
   
    for (let i=x.toString().length - 1; i > -1; i--) {
      s += x.toString()[i]
    }
    return x.toString() === s
};

x = 121
console.log(isPalindrome(x))