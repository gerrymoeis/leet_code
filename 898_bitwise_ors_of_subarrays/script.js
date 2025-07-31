/**
 * @param {number[]} arr
 * @return {number}
 */

var subarrayBitwiseORs = function(arr) {
    let res = new Set([arr[0]]);
    let prev_or = new Set([arr[0]]);
    for (let i=1; i < arr.length; ++i) {
        let curr_or = new Set([arr[i]]);
        for (const p_or of prev_or) {
            curr_or.add(arr[i] | p_or);
            res.add(arr[i] | p_or);
        }
        res.add(arr[i]);
        prev_or = curr_or;
    }
    return res.size;
};

// var subarrayBitwiseORs = function(arr) {
//     let res = new Set([arr[0]]);
//     let prev_or = new Set([arr[0]]);
//     for (let i=1; i < arr.length; ++i) {
//         let curr_or = new Set([arr[i]]);
//         for (const p_or of prev_or) {
//             curr_or.add(arr[i] | p_or);
//         }
        
//         for (const c_or of curr_or) {
//             res.add(c_or);
//         }
//         prev_or = curr_or;
//     }
//     return res.size;
// };

const tests = [
    [0],
    [1,1,2],
    [1,2,4]
]

for (test of tests) {
    console.log(subarrayBitwiseORs(test));
}

// Experiments
// var subarrayBitwiseORs = function(arr) {
//     let or = arr[0]
//     for (let i=1; i < arr.length; ++i) {
//         or |= arr[i]
//     }
//     return or;
// };

// console.log(1 | 2 | 4)

// Attempt 1
// var subarrayBitwiseORs = function(arr) {
//     let res = new Set([arr[0]]);
//     let curr_or = arr[0];
//     for (let i=1; i < arr.length; ++i) {
//         curr_or |= arr[i];
//         res.add(arr[i]).add(curr_or);
//     }
//     return res.size;
// };