/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s.trim().split(" ").pop().length
};

const s = "luffy is still joyboy"
// const s = "   fly me                       to   the       sdasdasda           moonsadas sdas moon             . moon         "
console.log(lengthOfLastWord(s))

// Solution 2
// var lengthOfLastWord = function(s) {
//   let count = 0
//   for (let i=s.length-1; i >= 0; i--) {
//     if (s[i] !== " ") {
//       count++
//       if (s[i-1] === " "){
//         break
//       }
//     }
//   }
//   return count
// };