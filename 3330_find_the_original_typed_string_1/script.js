/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let count = 1;
    for (let i=1; i < word.length; ++i) {
      if (word[i] === word[i-1]) {
        count++
      }
    }
    return count;
};

const tests = [
    "abbcccc",
    "abcd",
    "aaaa",
    "aaaabblool",
    "lol",
    "l"
]

for (test of tests) {
    console.log(possibleStringCount(test))
}