/**
 * @param {string} s
 * @return {boolean}
 */
const parentheses = {
  '(': ')',
  '[': ']',
  '{': '}'
}
var isValid = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (parentheses[s[i]]) {
      stack.push(s[i])
    } else {
      let last = stack.pop()
      if (parentheses[last] !== s[i]) {
        return false
      }
    }
  }
  return stack.length === 0
};

const s = "([{([{}])}])"
// const s = "([])"
console.log(isValid(s))

// !Object.keys(parentheses).includes(s[i])

// Attempt1 - not working
// var isValid2 = function(s) {
//   let valid = false
//   for (let i=0; i < s.length; i++) {
//     if (parentheses[s[i]] == s[i+1] || parentheses[s[i]] == s[s.length-1-i]) {
//       valid = true
//     }
//     else if (!parentheses[s[i]]) {
//       break
//     }
//     else {
//       valid = false
//       break
//     }
//   }
//   return valid
// };