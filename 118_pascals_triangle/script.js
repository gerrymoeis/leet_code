/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    nums = [[1]]
    for (let i=1; i<numRows; i++) {
      let rows = [1, 1]
      for (let j=0; j < i-1; j++) {
        rows.splice(1, 0, nums[i-1][j] + nums[i-1][j+1])
      }
      nums.push(rows)
    }
    return nums
};

let numRows = 50
console.log(generate(numRows))

// Experiment
// var generate = function(numRows) {
//     nums = [[1]]
//     for (let i=1; i<numRows; i++) {
//       let rows = [1, 1]
//       for (j in nums[i-1]) {
//         if (i == 1) break
//         rows.splice(i-1,0, rows.reduce((a, b) => a+b, 0))
//         console.log("an")
//       }
//       // for (let j=i; j<nums[i-1].length; j++) {
//       //   console.log("anjay")
//       // }
//       nums.push(rows)
//     }
//     return nums
// };