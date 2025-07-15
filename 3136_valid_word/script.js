/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false
    if (!/^[a-zA-Z0-9]+$/.test(word)) return false

    let hasVowel = false, hasConsonant = false
    
    for (let char of word) {
        if (hasVowel && hasConsonant) return true
        
        if ('aiueo'.includes(char.toLowerCase())) {
            hasVowel = true
        } else if (/[a-zA-Z]/.test(char)) {
            hasConsonant = true
        }
    }
    
    return hasVowel && hasConsonant
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

// First Attempt
// var isValid = function(word) {
//     let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
//     if (word.length >= 3) {
//       if (/^[a-zA-Z0-9]+$/.test(word)) {
//         let hasVowel = false
//         let hasConsonant = false
        
//         for (let i in word) {
//           if (hasVowel && hasConsonant) return true
          
//           if (vowels.has(word[i].toLowerCase())) {
//             hasVowel = true
//           }
//           else if (isNaN(word[i])) {
//             hasConsonant = true
//           }
//         }
        
//         if (hasVowel && hasConsonant) return true
//         else return false
//       }
//       else {
//         return false
//       }
//     }
//     else {
//       return false
//     }
// };