/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i=digits.length-1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            break;
        } else {
            if (digits[i] === 9 && i === 0) {
                digits[i] = 1;
                digits.push(0);
            } else {
                digits[i] = 0;
            }
        }
    }
    return digits;
};