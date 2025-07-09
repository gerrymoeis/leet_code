/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 1) return x
  
  root = x / 2
  while (true) {
    next_root = (root + (x / root)) / 2
    if (root - next_root < 1) return Math.floor(next_root)
    root = next_root
  }
};

const x = 10000
console.log(mySqrt(x))

// Experiment
// var mySqrt = function(x) {
//   for (let i=1; i <= x / 2; i++) {
//     let r = ((i + (x / i)) / 2)
//     console.log(r, x % Math.floor(r))
//     // if (x % r <= 1) return r
//   }
// };