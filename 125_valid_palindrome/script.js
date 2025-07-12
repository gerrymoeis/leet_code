/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false
    }
    return true;
};

let s = "100 00 1"
console.log(isPalindrome(s))

// First Attempt - Success
// var isPalindrome = function(s) {
//     s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//     return s === s.split('').reverse().join('')
// };

// Best Solution
// var isPalindrome = function(s) {
//     let left = 0;
//     let right = s.length - 1;
    
//     while (left < right) {
//         // Skip non-alphanumeric from left
//         while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
//             left++;
//         }
        
//         // Skip non-alphanumeric from right
//         while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
//             right--;
//         }
        
//         // Compare characters (case-insensitive)
//         if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//             return false;
//         }
        
//         left++;
//         right--;
//     }
    
//     return true;
// };