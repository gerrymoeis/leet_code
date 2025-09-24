/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";

    let res = [];
    if (Math.sign(numerator) !== Math.sign(denominator)) {
        res.push("-");
    }

    let n = Math.abs(numerator);
    let d = Math.abs(denominator);

    res.push(Math.floor(n / d).toString());
    let remainder = n % d;
    if (remainder === 0) return res.join("");

    res.push(".");

    let map = new Map();

    while (remainder !== 0) {
        if (map.has(remainder)) {
            let idx = map.get(remainder);
            res.splice(idx, 0, "(");
            res.push(")");
            break;
        }

        map.set(remainder, res.length);
        remainder *= 10;
        res.push(Math.floor(remainder / d).toString());
        remainder %= d;
    }

    return res.join("");
};