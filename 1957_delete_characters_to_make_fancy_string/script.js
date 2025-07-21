/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let fancy = s.slice(0,2)
    for (let i=2; i < s.length; i++) {
      if (s[i] === s[i-1] && s[i] === s[i-2]) continue
      
      fancy += s[i]
    }
    return fancy
};

const tests = [
    "leeetcode",
    "aaabaaaa",
    "aab",
    "a"
]

for (const test of tests) {
    console.log(makeFancyString(test))
}

// Attempt 1 - Success
// var makeFancyString = function(s) {
//     let char = s[0]
//     let fancy = char
//     let thrice = 1
//     for (let i=1; i < s.length; i++) {
//       if (char === s[i]) {
//         thrice++
//       }
//       else {
//         char = s[i]
//         thrice = 1
//       }
//       if (thrice > 2) continue
//       fancy += char
//     }
//     return fancy
// };