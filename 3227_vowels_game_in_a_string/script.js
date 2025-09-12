/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const vowels = new Set(["a","e","i","o","u"]);
    for (const c of s) {
        if (vowels.has(c)) return true;
    }
    return false;
};