/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const basket = new Set();
    let left = 0;
    let max = 0;
    for (let i=0; i < fruits.length; ++i) {
        if (!basket.has(fruits[i])) {
            basket.delete(fruits[left]);
            basket.add(fruits[i]);
            left = i;
            max = Math.max(max, i);
        }
    }
    return max+1;
};

const tests = [
    [1,2,1],
    [0,1,2,2],
    [1,2,3,2,2]
]

for (const test of tests) {
    console.log(totalFruit(test));
}