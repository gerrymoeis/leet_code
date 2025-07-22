/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let unique = new Set()
    let start = 0
    let longest = 0
    
    for (let i=0; i < s.length; i++) {
      while (unique.has(s[i])) {
        unique.delete(s[start])
        start++
      }
      
      unique.add(s[i])
      longest = Math.max(longest, i-start+1)
    }
    
    return longest
};

const tests = [
    "abcabcbb",
    "bbbbb",
    "pwwkew",
    "",
    " ",
    "1231",
    "$%)$[[*{}",
]

for (test of tests) {
    console.log(lengthOfLongestSubstring(test))
}

// Attempt 1 - Success
// var lengthOfLongestSubstring = function(s) {
//     let unique = new Set()
//     let start = 0
//     let count = 0
//     let longest = 0
    
//     for (let i=0; i < s.length; i++) {
//       while (unique.has(s[i])) {
//         unique.delete(s[start])
//         start++
//         count--
//       }
      
//       unique.add(s[i])
//       count++
//       longest = Math.max(longest, count)
//     }
    
//     return longest
// };