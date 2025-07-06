/**
 * @param {string} s
 * @return {number}
 */
const ROMAN = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }

var romanToInt = function(s) {
    let total = 0
    let minus = 0
    
    for (let i=0; i < s.length; i++) {
      const n1 = ROMAN[s[i]]
      const n2 = ROMAN[s[i+1]]
      
      total += n1
      if (n2 > n1) {
        minus += n1
      }
    }
    
    return total - minus * 2
};

s = "XXII"
console.log("Roman", romanToInt(s))

// Solution 2: Not yet satisfied
// var romanToInt = function(s) {
//     let total = 0
    
//     for (let i=0; i < s.length; i++) {
//       n1 = ROMAN[s[i]]
      
//       if (i + 1 < s.length) {
//         n2 = ROMAN[s[i+1]]
        
//         if (n1 >= n2) {
//           total += n1
//         }
//         else {
//           total += n2 - n1
//           i++
//         }
//       }
//       else {
//         total += n1
//       }
//     }
    
//     return total
// };

// Solution 1: Trying to think by myself Failed
// var romanToInt = function(s) {
//     let total = 0
//     let min = 0
//     for (let i=0; i < s.length; i++) {
//       total += ROMAN[s[i]]
//       if 
//       // min += 
//     }
    
//     return total - (min * 2)
// };