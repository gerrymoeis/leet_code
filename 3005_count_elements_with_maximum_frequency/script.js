/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = new Map();
    let maxFreq = 0;
    let total = 0;

    for (const num of nums) {
        const newFreq = (freq.get(num) || 0) + 1;
        freq.set(num, newFreq);

        if (newFreq > maxFreq) {
            maxFreq = newFreq;
            total = newFreq;
        } else if (newFreq === maxFreq) {
            total += newFreq;
        }
    }
    
    return total;
};