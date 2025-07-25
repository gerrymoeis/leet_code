/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    
    const map = new Map()
    for (let i=0; i < magazine.length; i++) {
      const count = map.get(magazine[i]) || 0
      map.set(magazine[i], count+1)
    }
    
    for (let i=0; i < ransomNote.length; i++) {
      const count = map.get(ransomNote[i]) || 0
      if (count <= 0) return false
      
      
      map.set(ransomNote[i], count-1)
    }
    return true
};

const tests = [
    ["a", "b"],
    ["aa", "ab"],
    ["aa", "aab"],
    ["anjay", "yajanw"],
    ["aaa", "aa"]
    
]

for (test of tests) {
    console.log(canConstruct(...test))
}

// Experiment
// var canConstruct = function(ransomNote, magazine) {
//     if (ransomNote.length > magazine.length) return false
//     console.log(ransomNote.split('').sort().join(''), magazine.split('').sort().slice(0, ransomNote.length).join(''))
//     return ransomNote.split('').sort().join('') === magazine.split('').sort().slice(0, ransomNote.length).join('')
// };

// var canConstruct = function(ransomNote, magazine) {
//     if (ransomNote.length > magazine.length) return false
    
//     let map = new Map()
//     for (let i=0; i < magazine.length; i++) {
//       let count = 1
//       if (map.has(magazine[i])) {
//         map.set(magazine[i], count++)
//       }
//       map.set(magazine[i], count)
//     }
    
//     for (let i=0; i < ransomNote.length; i++) {
//       let count = map.get(ransomNote[i])
//       if (map.has(ransomNote[i]) && count >= 1) {
//         map.set(ransomNote[i], count--)
//       }
//       else {
//         return false
//       }
//     }
//     console.log(map)
//     return true
// };

// Attempt 1 - Success but very inefficient
// var canConstruct = function(ransomNote, magazine) {
//     if (ransomNote.length > magazine.length) return false
//     magazine = magazine.split('')
//     for (let i=0; i < ransomNote.length; i++) {
//       if (magazine.includes(ransomNote[i])) {
//         magazine.splice(magazine.indexOf(ransomNote[i]), 1)
//       }
//       else {
//         return false
//       }
//     }
//     return true
// };

// Attempt 2 - O(n) Time and O(1) Space
// var canConstruct = function(ransomNote, magazine) {
//     if (ransomNote.length > magazine.length) return false
    
//     const map = new Map()
//     for (let i=0; i < magazine.length; i++) {
//       const count = map.get(magazine[i]) || 0
//       map.set(magazine[i], count+1)
//     }
    
//     for (let i=0; i < ransomNote.length; i++) {
//       const count = map.get(ransomNote[i]) || 0
//       if (count <= 0) return false
      
      
//       map.set(ransomNote[i], count-1)
//     }
//     return true
// };

