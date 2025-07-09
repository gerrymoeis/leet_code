/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
  let carry = 0
  let result = ''
  let i = a.length - 1
  let j = b.length - 1
  while (i >= 0 || j >= 0 || carry > 0) {
      const bitA = i >= 0 ? parseInt(a[i--], 10) : 0
      const bitB = j >= 0 ? parseInt(b[j--], 10) : 0
      
      const sum = bitA + bitB + carry
      result = (sum % 2).toString() + result
      carry = Math.floor(sum / 2)
  }
  return result
};

let a = "1"
let b = "10000"
console.log(addBinary_1(a, b))

var addBinary_1 = function(a, b) {
  const [binary1, binary2] = [a, b].sort((a, b) => b-a)
  binary1 = binary1.split("")

  for (let i=0; i < binary1.length; i++) {
    let x = binary1.length-1-i
    let y = binary2.length-1-i

    if (!binary1[x] || !binary2[y]) break
    if (binary1[x] < binary2[y]) {
      binary1[x] = binary2[y]
    }
    else if (binary1[x] > binary2[y]) continue
    else {
      for (let j=x; j >= 0; j--) {
        if (binary1[j] < binary2[y]) {
          binary1[x] = "0"
          binary1[j] = binary2[y]
          break
        }
        else {
          binary1[j] = "0"
          if (j == 0) {
            binary1.unshift("1")
          }
        }
      }
    }
  }
  console.log(binary1, binary2)
  return binary1.join('')
};

a = "1"
b = "10000"
console.log(addBinary_1(a, b))

// Experiment
// var addBinary = function(a, b) {
//   total = 0
//   x = 0
//   y = 0
//   for (let i=0; i < a.length; i++) {
//     x = (x * 2) + parseInt(a[i], 10)
//   }
//   for (let i=0; i < b.length; i++) {
//     y = (y * 2) + parseInt(b[i], 10)
//   }
//   total = x + y
//   return total
// };

// Experiment Attempt
// var addBinary = function(a, b) {
//   // return
//   a = a.split('')
//   for (let i=0; i < a.length; i++) {
//     let j = a.length-1-i
//     if (!a[j] || !b[i]) break
//     if (a[j] < b[i]) {
//       a[j] = b[i]
//     }
//     else {
//       for (let k=j-1; k >= 0; k--) {
//         if (a[k] < b[i]) {
//           a[j] = "0"
//           a[k] = b[i]
//           break
//         }
//         else {
//           a[k] = "0"
//           if (k == 0) {
//             a.unshift("1")
//           }
//         }
//       }
     
//       // for (let k=j; k >= 0; k--) {
//       //   if
//       //   if (a[k] == b[i]) {
//       //     a[k] = 0
//       //   }
//       //   else if (k != 0) {
//       //     a[k] = 1
//       //   }
//       //   else {
//       //     a.unshift(1)
//       //   }
//       // }
//     }
//     console.log(a[j], b[i])
//   }
//   return a.join('')
 
//   // let length = Math.max(a.length, b.length)
//   // for (let i=0; i < length; i++) {
//   //   if (!a[i] || !b[i]) break
//   //   console.log(a[i], b[i])
//   // }
// };