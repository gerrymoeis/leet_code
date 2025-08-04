/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = point = max = 0;
    for (let i=1; i < fruits.length; ++i) {
        if (fruits[i] !== fruits[i-1] && fruits[i] !== fruits[point-1]) {
            left = point;
        }
        if (fruits[i] !== fruits[i-1]) {
            point = i;
        }
        max = Math.max(max, i-left);
    }
    return max+1;
};

const tests = [
    [1,2,1],
    [1,2,2,2,3],
    [0,1,2,2],
    [1,2,3,2,2],
    [3,3,3,1,2,1,1,2,3,3,4]
]

for (const test of tests) {
    console.log(totalFruit(test));
}

// var totalFruit = function(fruits) {
//     const basket = new Set();
//     let left = 0;
//     let point = 0;
//     let max = 0;
//     for (let i=0; i < fruits.length; ++i) {
//         if (!basket.has(fruits[i]) && basket.size === 2) {
//             basket.clear();
//             basket.add(fruits[i]).add(fruits[i-1]);
//             left = point;
//         }
//         if (fruits[i] !== fruits[i-1]) {
//             point = i;
//         }
//         basket.add(fruits[i]);
//         max = Math.max(max, i-left);
//     }
//     return max+1;
// };

// Attempt 1
// var totalFruit = function(fruits) {
//     const basket = new Set();
//     let left = 0;
//     let max = 0;
//     for (let i=0; i < fruits.length; ++i) {
//         if (!basket.has(fruits[i])) {
//             basket.delete(fruits[left]);
//             basket.add(fruits[i]);
//             max = Math.max(max, i-left);
//             left = i;
//         }
//         console.log(basket, left, max)
//     }
//     return max+1;
// };

// Attempt 2
// var totalFruit = function(fruits) {
//     const basket = new Set();
//     let left = 0;
//     let point = 0;
//     let max = 0;
//     for (let i=0; i < fruits.length; ++i) {
//         if (!basket.has(fruits[i]) && basket.size === 2) {
//             basket.clear();
//             basket.add(fruits[i]).add(fruits[i-1]);
//             left = point;
//         } else if (fruits[i] !== fruits[i-1]) {
//             point = i;
//         }
//         basket.add(fruits[i]);
//         max = Math.max(max, i-left);
//     }
//     return max+1;
// };

// Experiment
// var totalFruit = function(fruits) {
//     const basket = new Set();
//     let left = 0;
//     let max = 0;
//     for (let i=0; i < fruits.length; ++i) {
//         if (!basket.has(fruits[i]) && basket.size === 2) {
//             basket.delete(fruits[left]);
//             basket.add(fruits[i]);
//             max = Math.max(max, i-left);
//             left = i;
//         } else {
//             basket.add(fruits[i]);
//             max = Math.max(max, i-left);
//         }
//     }
//     return max+1;
// };

// var totalFruit = function(fruits) {
//     const basket = new Set();
//     let left = 0;
//     let max = 0;
//     for (let i=0; i < fruits.length; ++i) {
//         if (!basket.has(fruits[i]) && basket.size === 2) {
//             basket.delete(fruits[left]);
//             basket.add(fruits[i]);
//             max = Math.max(max, i-left);
//             left = i;
//         } else {
//             basket.add(fruits[i]);
//             max = Math.max(max, i-left);
//         }
//         console.log(basket, left, max)
//     }
//     return max+1;
// };