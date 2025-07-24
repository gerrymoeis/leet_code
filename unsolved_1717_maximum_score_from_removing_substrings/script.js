/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// AI - Claude
var maximumGain = function(s, x, y) {
    function removeAndCount(str, first, second, points) {
        const stack = []
        let score = 0
        
        for (const char of str) {
            if (stack.length > 0 && stack[stack.length - 1] === first && char === second) {
                stack.pop()
                score += points
            } else {
                stack.push(char)
            }
        }
        
        return {
            remaining: stack.join(''),
            score: score
        }
    }
    
    let totalScore = 0
    if (x >= y) {
        const result1 = removeAndCount(s, 'a', 'b', x)
        totalScore += result1.score
        
        const result2 = removeAndCount(result1.remaining, 'b', 'a', y)
        totalScore += result2.score
    } else {
        const result1 = removeAndCount(s, 'b', 'a', y)
        totalScore += result1.score
        
        const result2 = removeAndCount(result1.remaining, 'a', 'b', x)
        totalScore += result2.score
    }
    
    return totalScore
};

const tests = [
    // ["cdbcbbaaabab",4,5],
    ["aabbaaxybbaabb",5,4]
]

for (const test of tests) {
    const [s,x,y] = test
    console.log(maximumGain(s,x,y))
}

// Visualization
// "aabbaaxybbaabb"
// "abaaxybbaabb" (ab) 5
// "aaxybbaabb" (ab) 10
// "aaxybbab" (ab) 15
// "aaxybb" (ab) 20


// Attempt Progress
// var maximumGain = function(s, x, y) {
//     let stacks = []
//     let total = 0
    
//     for (let i=0; i < s.length; i++) {
//       if (x > y) {
//         if (stacks[stacks.length-1] + s[i] === "ab") {
//           stacks.pop()
//           total += x
//         }
//         else {
//           stacks.push(s[i])
//         }
//       }
      
//       console.log(stacks)
//     }
    
//     return total
// };

// Experiment
// var maximumGain = function(s, x, y) {
//     let bigPoint = ""
//     let lowPoint = ""
//     let total = 0
//     if (x > y) {
//       bigPoint = "ab"
//       lowPoint = "ba"
//     } else {
//       lowPoint = "ab"
//       bigPoint = "ba"
//     }
//     let str = s.split('')
    
//     for (let i=1; i < str.length; i++) {
//       let word = str[i] + str[i-1]
//       if (word === bigPoint) {
//         [str[i], str[i-1]] = [undefined, undefined]
//         total += Math.max(x,y)
//         i = 1
//         console.log(str)
//       }
//     }
//     for (let i=1; i < str.length; i++) {
//       let word = str[i] + str[i-1]
//       if (word === lowPoint) {
//         [str[i], str[i-1]] = [undefined, undefined]
//         total += Math.min(x,y)
//         i = 1
//         console.log(str)
//       }
//     }
    
//     // for (let i=1; i < s.length; i++) {
//     //   if (s[i] + s[i-1] === bigPoint) {
//     //     s.replace(s[i] + s[i-1], "")
//     //     total += x
//     //   }
//     //   else if (s[i] + s[i-1] === lowPoint) {
//     //     s.replace(s[i] + s[i-1], "")
//     //     total += y
//     //   }
//     //   console.log(total, s)
//     // }
    
//     return [total, bigPoint, lowPoint]
// };




// for (let i=s.length-1; i > 0; i--) {
//   if (s[i] + s[i-1] === "ab") {
//     total += points["ab"]
//   }
//   else if (s[i] + s[i-1] === "ba") {
//     total += points["ba"]
//   }
// }


// Experiment failed
// var maximumGain = function(s, x, y) {
//     const points = {
//       "ab": x,
//       "ba": y
//     }
//     let total = 0
    
//     if (x > y) {
//       for (let i=1; i < s.length; i++) {
//         if (s[i]+s[i-1] === "ab") {
//           total += points["ab"]
//           s = s.substring(i, s.length-1)
//           i--
//         }
//       }
//       for (let i=s.length-2; i >= 0; i--) {
//         if (s[i]+s[i+1] === "ba") {
//           total += points["ba"]
//           s = s.substring(0,i)
//           i++
//         }
//       }
//     }
//     else {
//       for (let i=s.length-2; i >= 0; i--) {
//         if (s[i]+s[i+1] === "ba") {
//           total += points["ba"]
//           s = s.substring(0,i)
//           i++
//         }
//       }
//       for (let i=1; i < s.length; i++) {
//         if (s[i]+s[i-1] === "ab") {
//           total += points["ab"]
//           s = s.substring(i, s.length-1)
//           i--
//         }
//       }
//     }
    
//     return total
// };



// Experiment 3
// var maximumGain = function(s, x, y) {
//     const points = {
//       "ab": x,
//       "ba": y
//     }
//     let total = 0
//     s = [...s]
    
//     if (x > y) {
//       for (let i=s.length-2; i >= 0; i--) {
//         if (s[i]+s[i+1] === "ab") {
//           total += points["ab"]
//           for (let j=i; j < s.length-1; j++) {
//             s.pop()
//           }
//           // i++
//           console.log(s.join(""))
//         }
//       }
//       for (let i=s.length-2; i >= 0; i--) {
//         if (s[i]+s[i+1] === "ba") {
//           total += points["ba"]
//           for (let j=i; j < s.length-1; j++) {
//             s.pop()
//           }
//           // i++
//           console.log(s.join(""))
//         }
//       }
//       for (let i=s.length-2; i >= 0; i--) {
//         if (s[i]+s[i+1] === "ab") {
//           total += points["ab"]
//           for (let j=i; j < s.length-1; j++) {
//             s.pop()
//           }
//           // i++
//           console.log(s.join(""))
//         }
//       }
//     }
//     // else {
//     //   for (let i=s.length-2; i >= 0; i--) {
//     //     if (s[i]+s[i+1] === "ba") {
//     //       total += points["ba"]
//     //       s.pop()
//     //       i++
//     //     }
//     //   }
//     //   for (let i=1; i < s.length; i++) {
//     //     if (s[i]+s[i-1] === "ab") {
//     //       total += points["ab"]
//     //       s.pop()
//     //       i--
//     //     }
//     //   }
//     // }
    
//     return total
// };