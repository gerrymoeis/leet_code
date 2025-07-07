/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ""
    if (strs.length === 0) return prefix
    if (strs.length === 1) return strs[0]
    let minLength = Math.min(...strs.map(s => s.length))
    for (let i = 0; i < minLength; i++) {
        let char = strs[0][i]
        if (strs.every(s => s[i] === char)) {
            prefix += char
        } else {
            break
        }
    }
    return prefix
};

let strs = ["flower","flow","flight"]
console.log("prefix", longestCommonPrefix(strs))

// Attempt 1 - Failed
// var longestCommonPrefix = function(strs) {
//     let prefix = ""
//     let s = strs.join("").split("").sort().join("")
    
//     for (let i=0; i < s.length; i++) {
//       if (s[i] == s[i+1] && s[i] == s[i+2]) {
//         console.log("anjay", s[i])
//         prefix += s[i]
//       }
//     }
    
//     console.log(s)
//     return prefix
// };

// Experiment
// var longestCommonPrefix = function(strs) {
//     let prefix = ""
//     // let short = Math.min(...strs.map(str => str.length))
//     let short = strs.sort((a,b) => a.length - b.length)[0]
    
//     // for (let i=short; i >=0; i--) {
//     //   // if (strs.every(str => str == strs))
//     //   // let prefix = new Set(strs.map(str => str.slice(0, i)))
//     //   console.log(prefix)
//     // }
    
//     console.log(short)
//     return prefix
// };

// var longestCommonPrefix = function(strs) {
//     let prefix = ""
//     let short = strs.sort((a,b) => a.length - b.length)[0]
    
//     for (let i=0; i < short.length; i++) {
//       if (strs.every(str => str === short.slice[0, i])) {
//         prefix = short[0, i]
//       }
//       console.log(prefix)
//     }
    
//     console.log(short)
//     return prefix
// };