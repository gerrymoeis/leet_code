/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    const bLines = new Map([
        ['electronics', 0],
        ['grocery', 1],
        ['pharmacy', 2],
        ['restaurant', 3]
    ]);
    const valids = [];
    for (let i=0; i < code.length; ++i) {
        if (/^\w+$/.test(code[i]) && bLines.has(businessLine[i]) && isActive[i]) {
            valids.push([bLines.get(businessLine[i]), code[i]]);
        }
    }
    valids.sort();
    const v = [];
    for (let i=0; i < valids.length; ++i) {
        v.push(valids[i][1]);
    }
    return v;
};