/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const digits = Math.floor(Math.log10(Math.abs(x)));
    let num = 0;
    for (let i=digits; i >= 0; --i) {
        const d = x % 10;
        if (d > 2.2 && i >= 9) {
            return 0;
        } else if (num < (-2)**31 / 10 || num > (2**31 - 1) / 10) {
            return 0;
        }
        num = num * 10 + d;
        if (x >= 0) {
            x = Math.floor(x / 10);
        } else {
            x = Math.ceil(x / 10);
        }
    }
    return num;
};



// Attempt 1
// var reverse = function(x) {
//     const digits = Math.floor(Math.log10(Math.abs(x)));
//     let num = 0;
//     for (let i=digits; i >= 0; --i) {
//         const d = x % 10;
//         if (d > 2.2 && i >= 9) {
//             return 0;
//         }
//         num += d * 10**i;
//         if (x >= 0) {
//             x = Math.floor(x / 10);
//         } else {
//             x = Math.ceil(x / 10);
//         }
//     }
//     return num;
// };