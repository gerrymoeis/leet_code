/**
 * @param {number} n
 * @return {number}
 */

var soupServings = function(n) {
    if (n > 5000) return 1.0;

    const memo = new Map();

    const dp = (a, b) => {
        const key = `${a},${b}`;
        if (memo.has(key)) return memo.get(key);

        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1.0;
        if (b <= 0) return 0.0;

        let res = 0.25 * (
            dp(a - 100, b) +
            dp(a - 75, b - 25) +
            dp(a - 50, b - 50) +
            dp(a - 25, b - 75)
        );
        memo.set(key, res);
        return res;
    };

    return dp(n, n);
};

const tests = [100];
// const tests = [50, 100, 90, 1000, 3274, 56421];

for (const test of tests) {
    console.log(soupServings(test));
}


// Experiment
// console.log(Math.floor((3274 % 100) / 75))
// console.log(3274 / 100)
// console.log(100 / 0)

// Calculation
// Input: n = 100
// Output: 0.71875
// 0.25 * (1 + (3 * 0.25))


// var soupServings = function(n) {
//     if (n > 4800) return 1;
//     n = Math.ceil(n/25);
//     const pours = [[-4,0], [-3,-1], [-2,-2], [-1,-3]];
//     for (let i=0; i < n; ++i) {
        
//     }
//     return ;
// };

// var soupServings = function(n) {
//     let soupA = soupB = n;
//     let total = 0;
//     for (let i=0; i < 4; ++i) {
//         while (soupA > 0 || soupB > 0) {
//           switch (i) {
//             case 1:
//               if (soupA % 100 === 0 || soupA % 100 === soupA) {
//                   total += 1;
//               }
//               break;
//           }
//         }
//     }
//     return 0.25 * total;
// };


// var soupServings = function(n) {
//     let soupA = soupB = n;
//     let total = 0;
//     const pours = [[100,0], [75,25], [50,50], [25,75]];
//     for (let i=0; i < pours.length; ++i) {
//         const [pourA, pourB] = [pours[i][0], pours[i][1]];
//         if (soupA / pourA <= 1 && soupB / pourB <= 1) {
//             total += 0.5;
//         }
//         else if (soupA / pourA <= 1) {
//             total += 1;
//             console.log(soupA / pourA);
//         }
        
//         else {
//             console.log("anjay", soupA % pourA);
//         }
//     }
//     console.log(total);
//     return 0.25 * total;
// };