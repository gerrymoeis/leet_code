/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    const n = s.length;
    if (n === 2) return s.charCodeAt(0) === s.charCodeAt(1);
    const arr = new Uint8Array(n);
    for (let i = 0; i < n; i++) arr[i] = s.charCodeAt(i) - 48;

    let len = n;
    while (len > 2) {
        for (let i = 0; i < len - 1; i++) {
            const sum = arr[i] + arr[i + 1];
            arr[i] = sum < 10 ? sum : sum - 10;
        }
        len--;
    }

    return arr[0] === arr[1];
};