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
    let total = 0;
    for (let i=0; i < s.length; i++) {
      total += ROMAN[s[i]]
    }
    
    return total - 222
};

s = "MCMXCIV"
console.log(romanToInt(s))