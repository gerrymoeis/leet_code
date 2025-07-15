/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    if (word.length >= 3) {
      if (/^[a-zA-Z0-9]+$/.test(word)) {
        let hasVowel = false
        let hasConsonant = false
        
        for (let i in word) {
          if (hasVowel && hasConsonant) return true
          
          if (vowels.has(word[i])) {
            hasVowel = true
          }
          else {
            hasConsonant = true
          }
        }
        
        if (!hasVowel || !hasConsonant) return false
      }
      else {
        return false
      }
    }
    else {
      return false
    }
};

let word = "234Adas"
console.log(isValid(word))

// Experiment
// var isValid = function(word) {
//     if (word.length >= 3) {
//       if (/^[a-zA-Z0-9]+$/.test(word)) {
        
//       }
//       else {
//         return false
//       }
      
//       // for (i in word) {
//       //   if (/[^a-zA-Z0-9]/g.test())
//       // }
      
//       // let w = word[0]
//       // for (let i=1; i < word.length; i++) {
//       //   w
//       // }
//     }
//     else {
//       return false
//     }
// };