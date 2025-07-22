/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    while (num > 0) {
      num % 2 ? num-- : num /= 2
      steps++
    }
    return steps
};

const tests = [14,8,123,0,1,34901,24231,433,9432,8198351]
for (test of tests) {
    console.log(numberOfSteps(test))
}

// Attempt 1 - Success
// var numberOfSteps = function(num) {
//     let steps = 0
//     while (num > 0) {
//       if (num % 2) {
//         num--
//       }
//       else {
//         num /= 2
//       }
//       steps++
//     }
//     return steps
// };