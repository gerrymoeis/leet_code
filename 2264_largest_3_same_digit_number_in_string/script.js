/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let curr = num[0];
    let count = 1, max = "";
    for (let i=1; i < num.length; ++i) {
        if (curr !== num[i]) {
            curr = num[i];
            count = 1;
        }
        else {
            count++;
            if (count === 3) {
                const good = num[i].repeat(count);
                if (good > max) {
                    max = good;
                }
            }
        }
    }
    return max;
};