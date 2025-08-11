/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
function power(base, exp) {
    const MOD = 1e9 + 7;
    let res = 1n;
    base = BigInt(base);
    const bMOD = BigInt(MOD);

    while (exp > 0) {
        if (exp % 2 === 1) res = (res * base) % bMOD;
        base = (base * base) % bMOD;
        exp = Math.floor(exp / 2);
    }
    return Number(res);
}

var productQueries = function(n, queries) {
    const MOD = 1e9 + 7;
    const bMOD = BigInt(MOD);
    const prefix = [];
    let pow2 = 1;
    let prod = 1n;

    while (n > 0) {
        if ((n & 1) === 1) {
            prod = (prod * BigInt(pow2)) % bMOD;
            prefix.push(Number(prod));
        }
        pow2 *= 2;
        n >>= 1;
    }
    
    const answers = [];
    for (let [left, right] of queries) {
        let result = BigInt(prefix[right]);
        if (left > 0) {
            const inverse = power(prefix[left - 1], MOD - 2);
            result = (result * BigInt(inverse)) % bMOD;
        }
        answers.push(Number(result));
    }
    return answers;
};


function modInverse(a, MOD) {
    return modPow(a, MOD - 2, MOD);
}

function modPow(base, exp, MOD) {
    let res = 1;
    while (exp > 0) {
        if (exp & 1) res = (res * base) % MOD;
        base = (base * base) % MOD;
        exp >>= 1;
    }
    return res;
}

const tests = [
    [15, [[0,1],[2,2],[0,3]]],
    [2, [[0,0]]],
]

for (const test of tests) {
    console.log(productQueries(...test));
}



// Attempt 1 - O(n*k) time and O(n) space
// var productQueries = function(n, queries) {
//     n = n.toString(2);
//     const powers = [];
//     let p = 0;
//     for (let i=n.length-1; i >=0; --i) {
//         if (n[i] === "1") {
//             powers.push(2**p);
//         }
//         p++;
//     }
//     console.log(powers);
    
//     const MOD = 10**9 + 7;
//     const answers = [];
//     for (const [left, right] of queries) {
//         let count = 1;
//         for (let i=left; i <= right; ++i) {
//             count = (count * powers[i]) % MOD;
//         }
//         answers.push(count);
//     }
//     return answers;
// };


// Experiments

// var productQueries = function(n, queries) {
//     n = n.toString(2);
//     const powers = [];
//     let p = 0;
//     for (const d of n) {
//         if (d === "1") {
//             powers.push(2**p);
//         }
//         p++;
//     }
    
//     // while (n > 0) {
//     //     const d = n % 10;
//     //     n = Math.floor(n / 10);
//     //     if (d === 1) {
//     //         powers.push(2**p);
//     //     }
//     //     p++;
//     // }
//     console.log(powers);
    
//     const answers = [];
//     return answers;
// };


// var productQueries = function(n, queries) {
//     const powers = [];
//     let pow = 0;
//     let count = 1;
//     while (n > 0) {
//         n -= 2**pow;
//         if (n < 0) {
//             count /= powers[powers.length-1];
//             powers.pop();
//             powers.push(2**pow);
//             count *= 2**pow;
//         } else {
//             powers.push(2**pow);
//             count *= 2**pow;
//         }
//         pow++;
//     }
//     console.log(powers, count);
    
//     const answers = [];
    
//     for (const [left, right] of queries) {
//         let count = 1;
//         for (let i=left; i <= right; ++i) {
//             count *= powers[i];
//         }
//         // count *= 
//         answers.push(count % (10**9 + 7));
//     }
//     return answers;
// };