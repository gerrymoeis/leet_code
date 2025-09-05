// Fast O(60) time and O(1) space
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
    for (let k = 1; k <= 60; k++) {
        let target = num1 - k * num2;
        if (target < 0) continue;
        let bits = target.toString(2).replace(/0/g, "").length;
        if (bits <= k && k <= target) return k;
    }
    return -1;
};

// Some iteration O(60) time and O(1) space, turns out wrong
var makeTheIntegerZero = function(num1, num2) {
    function popcount(x) {
        let count = 0;
        while (x > 0) {
            x &= (x - 1);
            count++;
        }
        return count;
    }

    for (let k = 1; k <= 60; k++) {
        let target = num1 - k * num2;
        if (target < 0) continue;
        let bits = popcount(target);
        if (bits <= k && k <= target) return k;
    }
    return -1;
};