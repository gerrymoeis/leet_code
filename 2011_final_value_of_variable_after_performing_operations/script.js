/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for (const o of operations) {
        if (o[0] === "+" || o[2] === "+") x++;
        else if (o[0] === "-" || o[2] === "-") x--;
    }
    return x;
};