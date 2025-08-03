/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    let left = 0;
    let maxFruits = 0;
    let currentSum = 0;

    for (let right = 0; right < fruits.length; right++) {
        const rightPos = fruits[right][0];
        currentSum += fruits[right][1];

        while (left <= right) {
            const leftPos = fruits[left][0];
            const steps = Math.min(
                Math.abs(startPos - leftPos),
                Math.abs(startPos - rightPos)
            ) + (rightPos - leftPos);

            if (steps > k) {
                currentSum -= fruits[left][1];
                left++;
            } else {
                break; 
            }
        }
        
        maxFruits = Math.max(maxFruits, currentSum);
    }

    return maxFruits;
};

const tests = [
    [[[2,8],[6,3],[8,6]], 5, 4],
    [[[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], 5, 4],
    [[[0,3],[6,4],[8,5]], 3, 2],
    [[[0,10],[1,10],[3,5],[4,5]], 2, 2],
    [[[0,10],[1,10],[3,1],[4,99]], 2, 2]
]

for (const test of tests) {
    console.log(maxTotalFruits(...test));
}

// Attempt 1
// var maxTotalFruits = function(fruits, startPos, k) {
//     const mapFruits = new Map();
//     for (let i=0; i < fruits.length; ++i) {
//         if (Math.abs(startPos - fruits[i][0]) <= k) {
//             mapFruits.set(fruits[i][0] - startPos, fruits[i][1]);
//         }
//     }
    
//     return ;
// };

// Experiment
// var maxTotalFruits = function(fruits, startPos, k) {
//     const mapFruits = new Map();
//     for (let i=0; i < fruits.length; ++i) {
//         if (Math.abs(startPos - fruits[i][0]) <= k) {
//             mapFruits.set(fruits[i][0] - startPos, fruits[i][1]);
//         }
//     }
    
//     let leftTotal = 0, leftK = k;
//     let rightTotal = 0, rightK = k;
//     for (const [distance, fruits] of mapFruits) {
//         if (distance < 0) {
//             leftTotal += fruits;
//             leftK -= 1;
//         }
//         else {
//             rightTotal += fruits;
//             rightK -= 1;
//         }
//     }
    
//     let total = Math.max(leftTotal, rightTotal);
    
//     console.log("k", [leftK, rightK], "total", total)
//     console.log(mapFruits)
    
//     return [leftTotal, rightTotal];
// };