/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const v = new Map([["a",0], ["e",0], ["i",0], ["o",0], ["u",0]]);
    const c = new Map();
    let f_v = 0, f_c = 0;
    for (let i=1; i <= s.length; i+=2) {
        if (v.has(s[i-1])) {
            v.set(s[i-1], v.get(s[i-1])+1);
        } else {
            c.set(s[i-1], (c.get(s[i-1]) ?? 0) + 1);
        }
        f_v = Math.max(f_v, v.get(s[i-1]) ?? 0);
        f_c = Math.max(f_c, c.get(s[i-1]) ?? 0);

        if (!s[i]) continue;
        if (v.has(s[i])) {
            v.set(s[i], v.get(s[i])+1);
        } else {
            c.set(s[i], (c.get(s[i]) ?? 0) + 1);
        }
        f_v = Math.max(f_v, v.get(s[i]) ?? 0);
        f_c = Math.max(f_c, c.get(s[i]) ?? 0);
    }
    return f_v + f_c;
};