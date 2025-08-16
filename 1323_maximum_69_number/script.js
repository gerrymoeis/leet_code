/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const digits = Math.floor(Math.log10(num));
    let n = num;
    for (let i=digits; i >= 0; --i) {
        const d = Math.floor(n / 10**i);
        if (d === 6) {
            num += 3 * 10**i;
            break;
        }
        n -= d * 10**i;
    }
    return num;
};