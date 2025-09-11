/**
 * @param {string} s
 * @return {string}
 */
function letterToIndex(ch) {
    const code = ch.charCodeAt();
    return (code >= 65 && code <= 90) ? code-65 : code-97+26;
}
const indexToLetter = idx => idx < 26 ? String.fromCharCode(idx+65) : String.fromCharCode(idx-26+97);

var sortVowels = function(s) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const ascii = new Array(52).fill(0);
    for (let ch of s) {
        if (vowels.has(ch.toLowerCase())) {
            ascii[letterToIndex(ch)]++;
        }
    }

    const result = s.split("");
    let p = 0;
    for (let i=0; i < result.length; ++i) {
        if (vowels.has(result   [i].toLowerCase())) {
            while (ascii[p] === 0) p++;
            result[i] = indexToLetter(p);
            ascii[p]--;
        }
    }
    return result.join("");
};