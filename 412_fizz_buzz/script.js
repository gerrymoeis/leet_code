/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = []
    for (let i=1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FizzBuzz")
      }
      else if (i % 3 === 0) {
        arr.push("Fizz")
      }
      else if (i % 5 === 0) {
        arr.push("Buzz")
      }
      else {
        arr.push(i.toString())
      }
    }
    return arr
};

const tests = [3,5,15,7,9,10,2020,2343,41,65,21,5,45]
for (const test of tests) {
    console.log(fizzBuzz(test))
}